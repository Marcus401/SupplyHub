
namespace Dtos.Chat;

public class ChatHistoryResponseDto
{
	public ChatHistoryResponseObj[]? Messages { get; set; }
	public required int[] UserIds { get; set; }
}