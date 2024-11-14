namespace Dtos.Chat;

public class ChatHistoryResponseDto
{
	public ChatHistoryResponseObj[] Messages { get; set; }
	public int[] UserIds { get; set; }
}