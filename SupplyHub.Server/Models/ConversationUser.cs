using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;

public class ConversationUser
{
	public int ConversationId { get; set; }
	public int UserId { get; set; }
	public required Conversation Conversation { get; set; }
	public required User User { get; set; }	
}