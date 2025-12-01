export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

export interface AuditStat {
  label: string;
  value: number;
  color: string;
}

export interface RiskData {
  name: string;
  value: number;
  fill: string;
}