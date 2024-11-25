using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Chat;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using SupplyHub.Server.Data;
using Microsoft.EntityFrameworkCore;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/chat")]
public class ChatController(SupplyhubDbContext _context) : ControllerBase
{

	[Authorize]
	[HttpGet("fetch-chat-history/{chatId}")]
	public async Task<IActionResult> FetchChatHistory([FromRoute] int chatId)
	{
		var messages = await _context.Messages.Where(m => m.ConversationId == chatId).ToListAsync();
		
		if (messages == null || !messages.Any())
		{
			return NotFound(new { message = "No messages found for this chat ID" });
		}
		
		int[] userIds = messages.Select(m => m.UserId).Distinct().ToArray();
		ChatHistoryResponseObj[] chatHistory = new ChatHistoryResponseObj[messages.Count];
		
		var history = messages.Select(message => new ChatHistoryResponseObj
		{
			UserId = message.UserId,
			Text = message.Text,
		}).ToList();
		
		return Ok(new ChatHistoryResponseDto
		{
			Messages = history,
                        UserIds = userIds,
		});
	}

	[Authorize]
	[HttpGet("fetch-chat-list")]
	public async Task<IActionResult> FetchChatList()
	{
		var myId = User.FindFirstValue(ClaimTypes.NameIdentifier);
		if (myId == null)
		{
			return Unauthorized("Please log in to access this feature");
		}
		var id = int.Parse(myId);
		var conversationUsers = await _context.ConversationUsers
			.Where(m => m.UserId == id)
			.ToListAsync();
		
		var conversationIds = await _context.ConversationUsers
			.Where(m => m.UserId == id)
			.Select(m => m.ConversationId)
			.Distinct()
			.ToListAsync();
                
                var userProfiles = await _context.ConversationUsers
	                .Where(m => conversationIds.Contains(m.ConversationId) && m.UserId != id)
	                .Select(m => m.User) 
	                .Distinct()
	                .Select(u => new ChatListResponseDtoObj
	                {
		                ProfilePicture = u.ProfilePicture,
		                UserName = u.UserName
	                })
	                .ToListAsync();
		
		return Ok(userProfiles);
	}

	[Authorize]
	[HttpPost("send-message/{chatId}")]
	public async Task<IActionResult> SendMessage([FromRoute] int chatId, [FromBody] string text)
	{
		var rawIdentifier = User.FindFirstValue(ClaimTypes.NameIdentifier);
		if (rawIdentifier == null)
		{
			return Unauthorized("Please log in to access this feature");
		}
		var userId = int.Parse(rawIdentifier);
		
		var conversation = await _context.Conversations.FindAsync(chatId);
		var user = await _context.Users.FindAsync(userId);
		
		if (conversation == null || user == null)
		{
			return NotFound(new { message = "Conversation or User not found" });
		}
		
		Message message = new Message
		{
			ConversationId = chatId,
			UserId = userId,
			Text = text,
			User = user,
			Conversation = conversation,
		};
		
		await _context.Messages.AddAsync(message);
		
		var result = await _context.SaveChangesAsync();
		if (result > 0)
		{
			return Ok(true);
		}
		else
		{
			return BadRequest(false);
		}
	}
}