import { Base } from 'server/shared/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('ticker')
export class TickersEntity extends Base {
  @Column({ type: 'text' })
  exchange: string;

  @Column({ type: 'text' })
  symbol: string;

  @Column({ type: 'float' })
  open: number;

  @Column({ type: 'float' })
  last: number;

  @Column({ type: 'timestamptz' })
  date: Date;
}
