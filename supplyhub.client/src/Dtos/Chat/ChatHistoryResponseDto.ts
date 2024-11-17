import {ChatHistoryResponseObj} from './ChatHistoryResponseObj';

export interface ChatHistoryResponseDto {
    messages?: ChatHistoryResponseObj[];
    userIds: number[];
}