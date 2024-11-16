using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SupplyHub.Server.Models;
public class Conversation
{
	[Key]
	public int Id { get; set; }
}