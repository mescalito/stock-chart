import { Polling } from '@st/enums';
import { Base } from 'server/shared/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('stock')
export class StocksEntity extends Base {
  @Column({ type: 'text' })
  exchange: string;

  @Column({ type: 'text' })
  symbol: string;

  @Column({ type: 'enum', enum: Polling, default: Polling.DEFAULT })
  polling: number;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @Column({ type: 'float' })
  last: number;

  @Column({ type: 'float' })
  open: number;

  @Column({ type: 'float' })
  close: number;

  @Column({ type: 'timestamptz' })
  date: Date;
}
