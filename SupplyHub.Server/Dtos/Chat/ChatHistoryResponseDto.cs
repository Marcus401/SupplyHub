
namespace Dtos.Chat;

public class ChatHistoryResponseDto
{
	public List<ChatHistoryResponseObj>? Messages { get; set; }
	public required int[] UserIds { get; set; }
}