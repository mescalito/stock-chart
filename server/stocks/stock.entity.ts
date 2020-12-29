import { Base } from 'server/shared/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('stock')
export class StocksEntity extends Base {
  @Column({ type: 'text' })
  exchange: string;

  @Column({ type: 'text' })
  symbol: string;

  @Column({ type: 'int' })
  cpt: number;

  @Column({ type: 'boolean' })
  isActive: boolean;
}
