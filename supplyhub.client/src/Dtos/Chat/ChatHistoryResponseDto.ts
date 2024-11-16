import ChatHistoryResponseObj from './ChatHistoryResponseObj';

export default interface ChatHistoryResponseDto{
    messages?: ChatHistoryResponseObj[];
    userIds: number[];
}