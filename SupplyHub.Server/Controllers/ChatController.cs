using System.Threading.Tasks;
using SupplyHub.Server.Models;
using Dtos.Chat;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace SupplyHub.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
	[Authorize]
	[HttpPost("fetch-chat-history/{chatId}")]
	public async Task<IActionResult> FetchChatHistory([FromRoute] int chatId)
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("fetch-chat-list")]
	public async Task<IActionResult> FetchChatList()
	{
		return Ok();
	}

	[Authorize]
	[HttpPost("send-message/{chatId}")]
	public async Task<IActionResult> SendMessage([FromRoute] int chatId, [FromBody] string text)
	{
		return Ok();
	}
}