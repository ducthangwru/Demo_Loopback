import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UserModel extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'date',
  })
  dob?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
  })
  status: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserModel>) {
    super(data);
  }
}

export interface UserModelRelations {
  // describe navigational properties here
}

export type UserModelWithRelations = UserModel & UserModelRelations;
