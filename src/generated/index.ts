import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** BigInt custom scalar type */
  BigInt: any;
  /** Date custom scalar type */
  DateTime: any;
  /** Decimal custom scalar type */
  Decimal: any;
  /** Json custom scalar type */
  Json: any;
};

export type AggregateCoffee = {
  __typename?: 'AggregateCoffee';
  _avg?: Maybe<CoffeeAvgAggregateOutputType>;
  _count?: Maybe<CoffeeCountAggregateOutputType>;
  _max?: Maybe<CoffeeMaxAggregateOutputType>;
  _min?: Maybe<CoffeeMinAggregateOutputType>;
  _sum?: Maybe<CoffeeSumAggregateOutputType>;
};

export type AggregateCoffeeMachine = {
  __typename?: 'AggregateCoffeeMachine';
  _avg?: Maybe<CoffeeMachineAvgAggregateOutputType>;
  _count?: Maybe<CoffeeMachineCountAggregateOutputType>;
  _max?: Maybe<CoffeeMachineMaxAggregateOutputType>;
  _min?: Maybe<CoffeeMachineMinAggregateOutputType>;
  _sum?: Maybe<CoffeeMachineSumAggregateOutputType>;
};

export type AggregateCoffeeRating = {
  __typename?: 'AggregateCoffeeRating';
  _avg?: Maybe<CoffeeRatingAvgAggregateOutputType>;
  _count?: Maybe<CoffeeRatingCountAggregateOutputType>;
  _max?: Maybe<CoffeeRatingMaxAggregateOutputType>;
  _min?: Maybe<CoffeeRatingMinAggregateOutputType>;
  _sum?: Maybe<CoffeeRatingSumAggregateOutputType>;
};

export type AggregateCoffeeType = {
  __typename?: 'AggregateCoffeeType';
  _avg?: Maybe<CoffeeTypeAvgAggregateOutputType>;
  _count?: Maybe<CoffeeTypeCountAggregateOutputType>;
  _max?: Maybe<CoffeeTypeMaxAggregateOutputType>;
  _min?: Maybe<CoffeeTypeMinAggregateOutputType>;
  _sum?: Maybe<CoffeeTypeSumAggregateOutputType>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregateOutputType>;
  _count?: Maybe<CommentCountAggregateOutputType>;
  _max?: Maybe<CommentMaxAggregateOutputType>;
  _min?: Maybe<CommentMinAggregateOutputType>;
  _sum?: Maybe<CommentSumAggregateOutputType>;
};

export type AggregateDish = {
  __typename?: 'AggregateDish';
  _avg?: Maybe<DishAvgAggregateOutputType>;
  _count?: Maybe<DishCountAggregateOutputType>;
  _max?: Maybe<DishMaxAggregateOutputType>;
  _min?: Maybe<DishMinAggregateOutputType>;
  _sum?: Maybe<DishSumAggregateOutputType>;
};

export type AggregateDishComponent = {
  __typename?: 'AggregateDishComponent';
  _avg?: Maybe<DishComponentAvgAggregateOutputType>;
  _count?: Maybe<DishComponentCountAggregateOutputType>;
  _max?: Maybe<DishComponentMaxAggregateOutputType>;
  _min?: Maybe<DishComponentMinAggregateOutputType>;
  _sum?: Maybe<DishComponentSumAggregateOutputType>;
};

export type AggregateGuest = {
  __typename?: 'AggregateGuest';
  _avg?: Maybe<GuestAvgAggregateOutputType>;
  _count?: Maybe<GuestCountAggregateOutputType>;
  _max?: Maybe<GuestMaxAggregateOutputType>;
  _min?: Maybe<GuestMinAggregateOutputType>;
  _sum?: Maybe<GuestSumAggregateOutputType>;
};

export type AggregateMeal = {
  __typename?: 'AggregateMeal';
  _avg?: Maybe<MealAvgAggregateOutputType>;
  _count?: Maybe<MealCountAggregateOutputType>;
  _max?: Maybe<MealMaxAggregateOutputType>;
  _min?: Maybe<MealMinAggregateOutputType>;
  _sum?: Maybe<MealSumAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregateOutputType>;
  _count?: Maybe<UserCountAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  _sum?: Maybe<UserSumAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type Coffee = {
  __typename?: 'Coffee';
  _count: CoffeeCountOutputType;
  coffeeRatings: Array<CoffeeRating>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type CoffeeCoffeeRatingsArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<CoffeeRatingScalarFieldEnum>;
  orderBy?: InputMaybe<CoffeeRatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};

export type CoffeeAvgAggregateOutputType = {
  __typename?: 'CoffeeAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CoffeeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeCountAggregateOutputType = {
  __typename?: 'CoffeeCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CoffeeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeCountOutputType = {
  __typename?: 'CoffeeCountOutputType';
  coffeeRatings: Scalars['Int'];
};

export type CoffeeCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutCoffeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeCreateNestedOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeUncheckedCreateWithoutCoffeeRatingsInput>;
};

export type CoffeeCreateOrConnectWithoutCoffeeRatingsInput = {
  create: CoffeeUncheckedCreateWithoutCoffeeRatingsInput;
  where: CoffeeWhereUniqueInput;
};

export type CoffeeCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeMachine = {
  __typename?: 'CoffeeMachine';
  _count: CoffeeMachineCountOutputType;
  coffeeRatings: Array<CoffeeRating>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type CoffeeMachineCoffeeRatingsArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<CoffeeRatingScalarFieldEnum>;
  orderBy?: InputMaybe<CoffeeRatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};

export type CoffeeMachineAvgAggregateOutputType = {
  __typename?: 'CoffeeMachineAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CoffeeMachineAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeMachineCountAggregateOutputType = {
  __typename?: 'CoffeeMachineCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CoffeeMachineCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMachineCountOutputType = {
  __typename?: 'CoffeeMachineCountOutputType';
  coffeeRatings: Scalars['Int'];
};

export type CoffeeMachineCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutMachineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeMachineCreateNestedOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeMachineCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeMachineUncheckedCreateWithoutCoffeeRatingsInput>;
};

export type CoffeeMachineCreateOrConnectWithoutCoffeeRatingsInput = {
  create: CoffeeMachineUncheckedCreateWithoutCoffeeRatingsInput;
  where: CoffeeMachineWhereUniqueInput;
};

export type CoffeeMachineCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeMachineMaxAggregateOutputType = {
  __typename?: 'CoffeeMachineMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeMachineMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMachineMinAggregateOutputType = {
  __typename?: 'CoffeeMachineMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeMachineMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMachineOrderByWithAggregationInput = {
  _avg?: InputMaybe<CoffeeMachineAvgOrderByAggregateInput>;
  _count?: InputMaybe<CoffeeMachineCountOrderByAggregateInput>;
  _max?: InputMaybe<CoffeeMachineMaxOrderByAggregateInput>;
  _min?: InputMaybe<CoffeeMachineMinOrderByAggregateInput>;
  _sum?: InputMaybe<CoffeeMachineSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMachineOrderByWithRelationInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMachineRelationFilter = {
  is?: InputMaybe<CoffeeMachineWhereInput>;
  isNot?: InputMaybe<CoffeeMachineWhereInput>;
};

export enum CoffeeMachineScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CoffeeMachineScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CoffeeMachineSumAggregateOutputType = {
  __typename?: 'CoffeeMachineSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CoffeeMachineSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeMachineUncheckedCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutMachineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeMachineUncheckedCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeMachineUncheckedUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutMachineInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUncheckedUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutMachineInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUpdateOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeMachineCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeMachineUncheckedCreateWithoutCoffeeRatingsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CoffeeMachineUncheckedUpdateWithoutCoffeeRatingsInput>;
  upsert?: InputMaybe<CoffeeMachineUpsertWithoutCoffeeRatingsInput>;
};

export type CoffeeMachineUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeMachineUpsertWithoutCoffeeRatingsInput = {
  create: CoffeeMachineUncheckedCreateWithoutCoffeeRatingsInput;
  update: CoffeeMachineUncheckedUpdateWithoutCoffeeRatingsInput;
};

export type CoffeeMachineWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeMachineWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeMachineWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeMachineWhereInput>>>;
  coffeeRatings?: InputMaybe<CoffeeRatingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CoffeeMachineWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CoffeeMaxAggregateOutputType = {
  __typename?: 'CoffeeMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeMinAggregateOutputType = {
  __typename?: 'CoffeeMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeOrderByWithAggregationInput = {
  _avg?: InputMaybe<CoffeeAvgOrderByAggregateInput>;
  _count?: InputMaybe<CoffeeCountOrderByAggregateInput>;
  _max?: InputMaybe<CoffeeMaxOrderByAggregateInput>;
  _min?: InputMaybe<CoffeeMinOrderByAggregateInput>;
  _sum?: InputMaybe<CoffeeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeOrderByWithRelationInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeRating = {
  __typename?: 'CoffeeRating';
  coffee: Coffee;
  coffeeId: Scalars['Int'];
  coffeeType?: Maybe<CoffeeType>;
  coffeeTypeId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['DateTime'];
  guest?: Maybe<Guest>;
  guestId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  machine?: Maybe<CoffeeMachine>;
  machineId?: Maybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingAvgAggregateOutputType = {
  __typename?: 'CoffeeRatingAvgAggregateOutputType';
  coffeeId?: Maybe<Scalars['Float']>;
  coffeeTypeId?: Maybe<Scalars['Float']>;
  guestId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  machineId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type CoffeeRatingAvgOrderByAggregateInput = {
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingCountAggregateOutputType = {
  __typename?: 'CoffeeRatingCountAggregateOutputType';
  _all: Scalars['Int'];
  coffeeId: Scalars['Int'];
  coffeeTypeId: Scalars['Int'];
  createdAt: Scalars['Int'];
  guestId: Scalars['Int'];
  id: Scalars['Int'];
  machineId: Scalars['Int'];
  rating: Scalars['Int'];
};

export type CoffeeRatingCountOrderByAggregateInput = {
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingCreateInput = {
  coffee: CoffeeCreateNestedOneWithoutCoffeeRatingsInput;
  coffeeType?: InputMaybe<CoffeeTypeCreateNestedOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineCreateNestedOneWithoutCoffeeRatingsInput>;
  rating: Scalars['Int'];
};

export type CoffeeRatingCreateNestedManyWithoutCoffeeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeInput>>>;
};

export type CoffeeRatingCreateNestedManyWithoutCoffeeTypeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeTypeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeTypeInput>>>;
};

export type CoffeeRatingCreateNestedManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutGuestInput>>>;
};

export type CoffeeRatingCreateNestedManyWithoutMachineInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutMachineInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutMachineInput>>>;
};

export type CoffeeRatingCreateOrConnectWithoutCoffeeInput = {
  create: CoffeeRatingUncheckedCreateWithoutCoffeeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingCreateOrConnectWithoutCoffeeTypeInput = {
  create: CoffeeRatingUncheckedCreateWithoutCoffeeTypeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingCreateOrConnectWithoutGuestInput = {
  create: CoffeeRatingUncheckedCreateWithoutGuestInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingCreateOrConnectWithoutMachineInput = {
  create: CoffeeRatingUncheckedCreateWithoutMachineInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingCreateWithoutCoffeeInput = {
  coffeeType?: InputMaybe<CoffeeTypeCreateNestedOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineCreateNestedOneWithoutCoffeeRatingsInput>;
  rating: Scalars['Int'];
};

export type CoffeeRatingCreateWithoutCoffeeTypeInput = {
  coffee: CoffeeCreateNestedOneWithoutCoffeeRatingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineCreateNestedOneWithoutCoffeeRatingsInput>;
  rating: Scalars['Int'];
};

export type CoffeeRatingCreateWithoutGuestInput = {
  coffee: CoffeeCreateNestedOneWithoutCoffeeRatingsInput;
  coffeeType?: InputMaybe<CoffeeTypeCreateNestedOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  machine?: InputMaybe<CoffeeMachineCreateNestedOneWithoutCoffeeRatingsInput>;
  rating: Scalars['Int'];
};

export type CoffeeRatingCreateWithoutMachineInput = {
  coffee: CoffeeCreateNestedOneWithoutCoffeeRatingsInput;
  coffeeType?: InputMaybe<CoffeeTypeCreateNestedOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCoffeeRatingsInput>;
  rating: Scalars['Int'];
};

export type CoffeeRatingListRelationFilter = {
  every?: InputMaybe<CoffeeRatingWhereInput>;
  none?: InputMaybe<CoffeeRatingWhereInput>;
  some?: InputMaybe<CoffeeRatingWhereInput>;
};

export type CoffeeRatingMaxAggregateOutputType = {
  __typename?: 'CoffeeRatingMaxAggregateOutputType';
  coffeeId?: Maybe<Scalars['Int']>;
  coffeeTypeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  machineId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

export type CoffeeRatingMaxOrderByAggregateInput = {
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingMinAggregateOutputType = {
  __typename?: 'CoffeeRatingMinAggregateOutputType';
  coffeeId?: Maybe<Scalars['Int']>;
  coffeeTypeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  machineId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

export type CoffeeRatingMinOrderByAggregateInput = {
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CoffeeRatingOrderByWithAggregationInput = {
  _avg?: InputMaybe<CoffeeRatingAvgOrderByAggregateInput>;
  _count?: InputMaybe<CoffeeRatingCountOrderByAggregateInput>;
  _max?: InputMaybe<CoffeeRatingMaxOrderByAggregateInput>;
  _min?: InputMaybe<CoffeeRatingMinOrderByAggregateInput>;
  _sum?: InputMaybe<CoffeeRatingSumOrderByAggregateInput>;
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingOrderByWithRelationInput = {
  coffee?: InputMaybe<CoffeeOrderByWithRelationInput>;
  coffeeId?: InputMaybe<SortOrder>;
  coffeeType?: InputMaybe<CoffeeTypeOrderByWithRelationInput>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  guest?: InputMaybe<GuestOrderByWithRelationInput>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machine?: InputMaybe<CoffeeMachineOrderByWithRelationInput>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export enum CoffeeRatingScalarFieldEnum {
  CoffeeId = 'coffeeId',
  CoffeeTypeId = 'coffeeTypeId',
  CreatedAt = 'createdAt',
  GuestId = 'guestId',
  Id = 'id',
  MachineId = 'machineId',
  Rating = 'rating'
}

export type CoffeeRatingScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  coffeeId?: InputMaybe<IntFilter>;
  coffeeTypeId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guestId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  machineId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<IntFilter>;
};

export type CoffeeRatingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereWithAggregatesInput>>>;
  coffeeId?: InputMaybe<IntWithAggregatesFilter>;
  coffeeTypeId?: InputMaybe<IntNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  guestId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  machineId?: InputMaybe<IntNullableWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
};

export type CoffeeRatingSumAggregateOutputType = {
  __typename?: 'CoffeeRatingSumAggregateOutputType';
  coffeeId?: Maybe<Scalars['Int']>;
  coffeeTypeId?: Maybe<Scalars['Int']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  machineId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

export type CoffeeRatingSumOrderByAggregateInput = {
  coffeeId?: InputMaybe<SortOrder>;
  coffeeTypeId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  machineId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CoffeeRatingUncheckedCreateInput = {
  coffeeId: Scalars['Int'];
  coffeeTypeId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  machineId?: InputMaybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingUncheckedCreateNestedManyWithoutCoffeeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeInput>>>;
};

export type CoffeeRatingUncheckedCreateNestedManyWithoutCoffeeTypeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeTypeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeTypeInput>>>;
};

export type CoffeeRatingUncheckedCreateNestedManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutGuestInput>>>;
};

export type CoffeeRatingUncheckedCreateNestedManyWithoutMachineInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutMachineInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutMachineInput>>>;
};

export type CoffeeRatingUncheckedCreateWithoutCoffeeInput = {
  coffeeTypeId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  machineId?: InputMaybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingUncheckedCreateWithoutCoffeeTypeInput = {
  coffeeId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  machineId?: InputMaybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingUncheckedCreateWithoutGuestInput = {
  coffeeId: Scalars['Int'];
  coffeeTypeId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  machineId?: InputMaybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingUncheckedCreateWithoutMachineInput = {
  coffeeId: Scalars['Int'];
  coffeeTypeId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating: Scalars['Int'];
};

export type CoffeeRatingUncheckedUpdateInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateManyInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateManyWithoutCoffeeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutCoffeeInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeInput>>>;
};

export type CoffeeRatingUncheckedUpdateManyWithoutCoffeeRatingsInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateManyWithoutCoffeeTypeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeTypeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeTypeInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeTypeInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutCoffeeTypeInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeTypeInput>>>;
};

export type CoffeeRatingUncheckedUpdateManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutGuestInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutGuestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutGuestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutGuestInput>>>;
};

export type CoffeeRatingUncheckedUpdateManyWithoutMachineInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutMachineInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutMachineInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutMachineInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutMachineInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutMachineInput>>>;
};

export type CoffeeRatingUncheckedUpdateWithoutCoffeeInput = {
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateWithoutCoffeeTypeInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateWithoutGuestInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  machineId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUncheckedUpdateWithoutMachineInput = {
  coffeeId?: InputMaybe<IntFieldUpdateOperationsInput>;
  coffeeTypeId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateInput = {
  coffee?: InputMaybe<CoffeeUpdateOneRequiredWithoutCoffeeRatingsInput>;
  coffeeType?: InputMaybe<CoffeeTypeUpdateOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineUpdateOneWithoutCoffeeRatingsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateManyWithWhereWithoutCoffeeInput = {
  data: CoffeeRatingUncheckedUpdateManyWithoutCoffeeRatingsInput;
  where: CoffeeRatingScalarWhereInput;
};

export type CoffeeRatingUpdateManyWithWhereWithoutCoffeeTypeInput = {
  data: CoffeeRatingUncheckedUpdateManyWithoutCoffeeRatingsInput;
  where: CoffeeRatingScalarWhereInput;
};

export type CoffeeRatingUpdateManyWithWhereWithoutGuestInput = {
  data: CoffeeRatingUncheckedUpdateManyWithoutCoffeeRatingsInput;
  where: CoffeeRatingScalarWhereInput;
};

export type CoffeeRatingUpdateManyWithWhereWithoutMachineInput = {
  data: CoffeeRatingUncheckedUpdateManyWithoutCoffeeRatingsInput;
  where: CoffeeRatingScalarWhereInput;
};

export type CoffeeRatingUpdateManyWithoutCoffeeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutCoffeeInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeInput>>>;
};

export type CoffeeRatingUpdateManyWithoutCoffeeTypeInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutCoffeeTypeInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutCoffeeTypeInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeTypeInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutCoffeeTypeInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeTypeInput>>>;
};

export type CoffeeRatingUpdateManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutGuestInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutGuestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutGuestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutGuestInput>>>;
};

export type CoffeeRatingUpdateManyWithoutMachineInput = {
  connect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateOrConnectWithoutMachineInput>>>;
  create?: InputMaybe<Array<InputMaybe<CoffeeRatingCreateWithoutMachineInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateWithWhereUniqueWithoutMachineInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CoffeeRatingUpdateManyWithWhereWithoutMachineInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CoffeeRatingUpsertWithWhereUniqueWithoutMachineInput>>>;
};

export type CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeInput = {
  data: CoffeeRatingUncheckedUpdateWithoutCoffeeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpdateWithWhereUniqueWithoutCoffeeTypeInput = {
  data: CoffeeRatingUncheckedUpdateWithoutCoffeeTypeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpdateWithWhereUniqueWithoutGuestInput = {
  data: CoffeeRatingUncheckedUpdateWithoutGuestInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpdateWithWhereUniqueWithoutMachineInput = {
  data: CoffeeRatingUncheckedUpdateWithoutMachineInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpdateWithoutCoffeeInput = {
  coffeeType?: InputMaybe<CoffeeTypeUpdateOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineUpdateOneWithoutCoffeeRatingsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateWithoutCoffeeTypeInput = {
  coffee?: InputMaybe<CoffeeUpdateOneRequiredWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCoffeeRatingsInput>;
  machine?: InputMaybe<CoffeeMachineUpdateOneWithoutCoffeeRatingsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateWithoutGuestInput = {
  coffee?: InputMaybe<CoffeeUpdateOneRequiredWithoutCoffeeRatingsInput>;
  coffeeType?: InputMaybe<CoffeeTypeUpdateOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  machine?: InputMaybe<CoffeeMachineUpdateOneWithoutCoffeeRatingsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpdateWithoutMachineInput = {
  coffee?: InputMaybe<CoffeeUpdateOneRequiredWithoutCoffeeRatingsInput>;
  coffeeType?: InputMaybe<CoffeeTypeUpdateOneWithoutCoffeeRatingsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCoffeeRatingsInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeInput = {
  create: CoffeeRatingUncheckedCreateWithoutCoffeeInput;
  update: CoffeeRatingUncheckedUpdateWithoutCoffeeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpsertWithWhereUniqueWithoutCoffeeTypeInput = {
  create: CoffeeRatingUncheckedCreateWithoutCoffeeTypeInput;
  update: CoffeeRatingUncheckedUpdateWithoutCoffeeTypeInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpsertWithWhereUniqueWithoutGuestInput = {
  create: CoffeeRatingUncheckedCreateWithoutGuestInput;
  update: CoffeeRatingUncheckedUpdateWithoutGuestInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingUpsertWithWhereUniqueWithoutMachineInput = {
  create: CoffeeRatingUncheckedCreateWithoutMachineInput;
  update: CoffeeRatingUncheckedUpdateWithoutMachineInput;
  where: CoffeeRatingWhereUniqueInput;
};

export type CoffeeRatingWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeRatingWhereInput>>>;
  coffee?: InputMaybe<CoffeeWhereInput>;
  coffeeId?: InputMaybe<IntFilter>;
  coffeeType?: InputMaybe<CoffeeTypeWhereInput>;
  coffeeTypeId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  guest?: InputMaybe<GuestWhereInput>;
  guestId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  machine?: InputMaybe<CoffeeMachineWhereInput>;
  machineId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<IntFilter>;
};

export type CoffeeRatingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CoffeeRelationFilter = {
  is?: InputMaybe<CoffeeWhereInput>;
  isNot?: InputMaybe<CoffeeWhereInput>;
};

export enum CoffeeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CoffeeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CoffeeSumAggregateOutputType = {
  __typename?: 'CoffeeSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CoffeeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeType = {
  __typename?: 'CoffeeType';
  _count: CoffeeTypeCountOutputType;
  coffeeRatings: Array<CoffeeRating>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type CoffeeTypeCoffeeRatingsArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<CoffeeRatingScalarFieldEnum>;
  orderBy?: InputMaybe<CoffeeRatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};

export type CoffeeTypeAvgAggregateOutputType = {
  __typename?: 'CoffeeTypeAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type CoffeeTypeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeTypeCountAggregateOutputType = {
  __typename?: 'CoffeeTypeCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type CoffeeTypeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeTypeCountOutputType = {
  __typename?: 'CoffeeTypeCountOutputType';
  coffeeRatings: Scalars['Int'];
};

export type CoffeeTypeCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutCoffeeTypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeTypeCreateNestedOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeTypeCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeTypeUncheckedCreateWithoutCoffeeRatingsInput>;
};

export type CoffeeTypeCreateOrConnectWithoutCoffeeRatingsInput = {
  create: CoffeeTypeUncheckedCreateWithoutCoffeeRatingsInput;
  where: CoffeeTypeWhereUniqueInput;
};

export type CoffeeTypeCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CoffeeTypeMaxAggregateOutputType = {
  __typename?: 'CoffeeTypeMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeTypeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeTypeMinAggregateOutputType = {
  __typename?: 'CoffeeTypeMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type CoffeeTypeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeTypeOrderByWithAggregationInput = {
  _avg?: InputMaybe<CoffeeTypeAvgOrderByAggregateInput>;
  _count?: InputMaybe<CoffeeTypeCountOrderByAggregateInput>;
  _max?: InputMaybe<CoffeeTypeMaxOrderByAggregateInput>;
  _min?: InputMaybe<CoffeeTypeMinOrderByAggregateInput>;
  _sum?: InputMaybe<CoffeeTypeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeTypeOrderByWithRelationInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CoffeeTypeRelationFilter = {
  is?: InputMaybe<CoffeeTypeWhereInput>;
  isNot?: InputMaybe<CoffeeTypeWhereInput>;
};

export enum CoffeeTypeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type CoffeeTypeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CoffeeTypeSumAggregateOutputType = {
  __typename?: 'CoffeeTypeSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type CoffeeTypeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type CoffeeTypeUncheckedCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutCoffeeTypeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeTypeUncheckedCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeTypeUncheckedUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutCoffeeTypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUncheckedUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutCoffeeTypeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUpdateOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeTypeCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeTypeUncheckedCreateWithoutCoffeeRatingsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<CoffeeTypeUncheckedUpdateWithoutCoffeeRatingsInput>;
  upsert?: InputMaybe<CoffeeTypeUpsertWithoutCoffeeRatingsInput>;
};

export type CoffeeTypeUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeTypeUpsertWithoutCoffeeRatingsInput = {
  create: CoffeeTypeUncheckedCreateWithoutCoffeeRatingsInput;
  update: CoffeeTypeUncheckedUpdateWithoutCoffeeRatingsInput;
};

export type CoffeeTypeWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeTypeWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeTypeWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeTypeWhereInput>>>;
  coffeeRatings?: InputMaybe<CoffeeRatingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CoffeeTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type CoffeeUncheckedCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutCoffeeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeUncheckedCreateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type CoffeeUncheckedUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutCoffeeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUncheckedUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutCoffeeInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUpdateOneRequiredWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<CoffeeWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CoffeeCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<CoffeeUncheckedCreateWithoutCoffeeRatingsInput>;
  update?: InputMaybe<CoffeeUncheckedUpdateWithoutCoffeeRatingsInput>;
  upsert?: InputMaybe<CoffeeUpsertWithoutCoffeeRatingsInput>;
};

export type CoffeeUpdateWithoutCoffeeRatingsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CoffeeUpsertWithoutCoffeeRatingsInput = {
  create: CoffeeUncheckedCreateWithoutCoffeeRatingsInput;
  update: CoffeeUncheckedUpdateWithoutCoffeeRatingsInput;
};

export type CoffeeWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CoffeeWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CoffeeWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CoffeeWhereInput>>>;
  coffeeRatings?: InputMaybe<CoffeeRatingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CoffeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Comment = {
  __typename?: 'Comment';
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dish?: Maybe<Dish>;
  dishId?: Maybe<Scalars['Int']>;
  guest?: Maybe<Guest>;
  guestId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  meal?: Maybe<Meal>;
  mealId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
};

export type CommentAvgAggregateOutputType = {
  __typename?: 'CommentAvgAggregateOutputType';
  dishId?: Maybe<Scalars['Float']>;
  guestId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  mealId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

export type CommentAvgOrderByAggregateInput = {
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CommentCountAggregateOutputType = {
  __typename?: 'CommentCountAggregateOutputType';
  _all: Scalars['Int'];
  content: Scalars['Int'];
  createdAt: Scalars['Int'];
  dishId: Scalars['Int'];
  guestId: Scalars['Int'];
  id: Scalars['Int'];
  mealId: Scalars['Int'];
  rating: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dish?: InputMaybe<DishCreateNestedOneWithoutCommentsInput>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCommentsInput>;
  meal?: InputMaybe<MealCreateNestedOneWithoutCommentsInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateNestedManyWithoutDishInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutDishInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutDishInput>>>;
};

export type CommentCreateNestedManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutGuestInput>>>;
};

export type CommentCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutMealInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutMealInput>>>;
};

export type CommentCreateOrConnectWithoutDishInput = {
  create: CommentUncheckedCreateWithoutDishInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutGuestInput = {
  create: CommentUncheckedCreateWithoutGuestInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutMealInput = {
  create: CommentUncheckedCreateWithoutMealInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutDishInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCommentsInput>;
  meal?: InputMaybe<MealCreateNestedOneWithoutCommentsInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutGuestInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dish?: InputMaybe<DishCreateNestedOneWithoutCommentsInput>;
  meal?: InputMaybe<MealCreateNestedOneWithoutCommentsInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentCreateWithoutMealInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dish?: InputMaybe<DishCreateNestedOneWithoutCommentsInput>;
  guest?: InputMaybe<GuestCreateNestedOneWithoutCommentsInput>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregateOutputType = {
  __typename?: 'CommentMaxAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dishId?: Maybe<Scalars['Int']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mealId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentMinAggregateOutputType = {
  __typename?: 'CommentMinAggregateOutputType';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dishId?: Maybe<Scalars['Int']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mealId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dish?: InputMaybe<DishOrderByWithRelationInput>;
  dishId?: InputMaybe<SortOrder>;
  guest?: InputMaybe<GuestOrderByWithRelationInput>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meal?: InputMaybe<MealOrderByWithRelationInput>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DishId = 'dishId',
  GuestId = 'guestId',
  Id = 'id',
  MealId = 'mealId',
  Rating = 'rating',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dishId?: InputMaybe<IntNullableFilter>;
  guestId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  mealId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentScalarWhereWithAggregatesInput>>>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  dishId?: InputMaybe<IntNullableWithAggregatesFilter>;
  guestId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  mealId?: InputMaybe<IntNullableWithAggregatesFilter>;
  rating?: InputMaybe<IntNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CommentSumAggregateOutputType = {
  __typename?: 'CommentSumAggregateOutputType';
  dishId?: Maybe<Scalars['Int']>;
  guestId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mealId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

export type CommentSumOrderByAggregateInput = {
  dishId?: InputMaybe<SortOrder>;
  guestId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  mealId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
};

export type CommentUncheckedCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dishId?: InputMaybe<Scalars['Int']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mealId?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateNestedManyWithoutDishInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutDishInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutDishInput>>>;
};

export type CommentUncheckedCreateNestedManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutGuestInput>>>;
};

export type CommentUncheckedCreateNestedManyWithoutMealInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutMealInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutMealInput>>>;
};

export type CommentUncheckedCreateWithoutDishInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mealId?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutGuestInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dishId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mealId?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedCreateWithoutMealInput = {
  content?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dishId?: InputMaybe<Scalars['Int']>;
  guestId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CommentUncheckedUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dishId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dishId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutCommentsInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dishId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateManyWithoutDishInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutDishInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutDishInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutDishInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutDishInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutDishInput>>>;
};

export type CommentUncheckedUpdateManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutGuestInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutGuestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutGuestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutGuestInput>>>;
};

export type CommentUncheckedUpdateManyWithoutMealInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutMealInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutMealInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutMealInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutMealInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutMealInput>>>;
};

export type CommentUncheckedUpdateWithoutDishInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutGuestInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dishId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  mealId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUncheckedUpdateWithoutMealInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dishId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  guestId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneWithoutCommentsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCommentsInput>;
  meal?: InputMaybe<MealUpdateOneWithoutCommentsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutDishInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutGuestInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutMealInput = {
  data: CommentUncheckedUpdateManyWithoutCommentsInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutDishInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutDishInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutDishInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutDishInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutDishInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutDishInput>>>;
};

export type CommentUpdateManyWithoutGuestInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutGuestInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutGuestInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutGuestInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutGuestInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutGuestInput>>>;
};

export type CommentUpdateManyWithoutMealInput = {
  connect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<CommentCreateOrConnectWithoutMealInput>>>;
  create?: InputMaybe<Array<InputMaybe<CommentCreateWithoutMealInput>>>;
  delete?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<CommentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<CommentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<CommentUpdateWithWhereUniqueWithoutMealInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<CommentUpdateManyWithWhereWithoutMealInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<CommentUpsertWithWhereUniqueWithoutMealInput>>>;
};

export type CommentUpdateWithWhereUniqueWithoutDishInput = {
  data: CommentUncheckedUpdateWithoutDishInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutGuestInput = {
  data: CommentUncheckedUpdateWithoutGuestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutMealInput = {
  data: CommentUncheckedUpdateWithoutMealInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutDishInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCommentsInput>;
  meal?: InputMaybe<MealUpdateOneWithoutCommentsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutGuestInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneWithoutCommentsInput>;
  meal?: InputMaybe<MealUpdateOneWithoutCommentsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateWithoutMealInput = {
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  dish?: InputMaybe<DishUpdateOneWithoutCommentsInput>;
  guest?: InputMaybe<GuestUpdateOneWithoutCommentsInput>;
  rating?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutDishInput = {
  create: CommentUncheckedCreateWithoutDishInput;
  update: CommentUncheckedUpdateWithoutDishInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutGuestInput = {
  create: CommentUncheckedCreateWithoutGuestInput;
  update: CommentUncheckedUpdateWithoutGuestInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutMealInput = {
  create: CommentUncheckedCreateWithoutMealInput;
  update: CommentUncheckedUpdateWithoutMealInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<CommentWhereInput>>>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dish?: InputMaybe<DishWhereInput>;
  dishId?: InputMaybe<IntNullableFilter>;
  guest?: InputMaybe<GuestWhereInput>;
  guestId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  meal?: InputMaybe<MealWhereInput>;
  mealId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<IntNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type Dish = {
  __typename?: 'Dish';
  _count: DishCountOutputType;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  dishComponents: Array<DishComponent>;
  id: Scalars['Int'];
  meals: Array<Meal>;
  name: Scalars['String'];
  url: Scalars['String'];
};


export type DishCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type DishDishComponentsArgs = {
  cursor?: InputMaybe<DishComponentWhereUniqueInput>;
  distinct?: InputMaybe<DishComponentScalarFieldEnum>;
  orderBy?: InputMaybe<DishComponentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type DishMealsArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<MealScalarFieldEnum>;
  orderBy?: InputMaybe<MealOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};

export type DishAvgAggregateOutputType = {
  __typename?: 'DishAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type DishAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishComponent = {
  __typename?: 'DishComponent';
  _count: DishComponentCountOutputType;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  dishes: Array<Dish>;
  id: Scalars['Int'];
  name: Scalars['String'];
  recipes?: Maybe<Scalars['String']>;
};


export type DishComponentDishesArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<DishScalarFieldEnum>;
  orderBy?: InputMaybe<DishOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};

export type DishComponentAvgAggregateOutputType = {
  __typename?: 'DishComponentAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type DishComponentAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishComponentCountAggregateOutputType = {
  __typename?: 'DishComponentCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  recipes: Scalars['Int'];
};

export type DishComponentCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<SortOrder>;
};

export type DishComponentCountOutputType = {
  __typename?: 'DishComponentCountOutputType';
  dishes: Scalars['Int'];
};

export type DishComponentCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  dishes?: InputMaybe<DishCreateNestedManyWithoutDishComponentsInput>;
  name: Scalars['String'];
  recipes?: InputMaybe<Scalars['String']>;
};

export type DishComponentCreateNestedManyWithoutDishesInput = {
  connect?: InputMaybe<Array<InputMaybe<DishComponentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishComponentCreateOrConnectWithoutDishesInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishComponentCreateWithoutDishesInput>>>;
};

export type DishComponentCreateOrConnectWithoutDishesInput = {
  create: DishComponentUncheckedCreateWithoutDishesInput;
  where: DishComponentWhereUniqueInput;
};

export type DishComponentCreateWithoutDishesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  name: Scalars['String'];
  recipes?: InputMaybe<Scalars['String']>;
};

export type DishComponentListRelationFilter = {
  every?: InputMaybe<DishComponentWhereInput>;
  none?: InputMaybe<DishComponentWhereInput>;
  some?: InputMaybe<DishComponentWhereInput>;
};

export type DishComponentMaxAggregateOutputType = {
  __typename?: 'DishComponentMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recipes?: Maybe<Scalars['String']>;
};

export type DishComponentMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<SortOrder>;
};

export type DishComponentMinAggregateOutputType = {
  __typename?: 'DishComponentMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  recipes?: Maybe<Scalars['String']>;
};

export type DishComponentMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<SortOrder>;
};

export type DishComponentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DishComponentOrderByWithAggregationInput = {
  _avg?: InputMaybe<DishComponentAvgOrderByAggregateInput>;
  _count?: InputMaybe<DishComponentCountOrderByAggregateInput>;
  _max?: InputMaybe<DishComponentMaxOrderByAggregateInput>;
  _min?: InputMaybe<DishComponentMinOrderByAggregateInput>;
  _sum?: InputMaybe<DishComponentSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<SortOrder>;
};

export type DishComponentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dishes?: InputMaybe<DishOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recipes?: InputMaybe<SortOrder>;
};

export enum DishComponentScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Recipes = 'recipes'
}

export type DishComponentScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<StringNullableFilter>;
};

export type DishComponentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  recipes?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type DishComponentSumAggregateOutputType = {
  __typename?: 'DishComponentSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type DishComponentSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishComponentUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  recipes?: InputMaybe<Scalars['String']>;
};

export type DishComponentUncheckedCreateWithoutDishesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  recipes?: InputMaybe<Scalars['String']>;
};

export type DishComponentUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUncheckedUpdateManyWithoutDishComponentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUncheckedUpdateWithoutDishesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishes?: InputMaybe<DishUpdateManyWithoutDishComponentsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUpdateManyWithWhereWithoutDishesInput = {
  data: DishComponentUncheckedUpdateManyWithoutDishComponentsInput;
  where: DishComponentScalarWhereInput;
};

export type DishComponentUpdateManyWithoutDishesInput = {
  connect?: InputMaybe<Array<InputMaybe<DishComponentWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishComponentCreateOrConnectWithoutDishesInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishComponentCreateWithoutDishesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<DishComponentWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DishComponentScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DishComponentWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DishComponentWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DishComponentUpdateWithWhereUniqueWithoutDishesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DishComponentUpdateManyWithWhereWithoutDishesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DishComponentUpsertWithWhereUniqueWithoutDishesInput>>>;
};

export type DishComponentUpdateWithWhereUniqueWithoutDishesInput = {
  data: DishComponentUncheckedUpdateWithoutDishesInput;
  where: DishComponentWhereUniqueInput;
};

export type DishComponentUpdateWithoutDishesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recipes?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DishComponentUpsertWithWhereUniqueWithoutDishesInput = {
  create: DishComponentUncheckedCreateWithoutDishesInput;
  update: DishComponentUncheckedUpdateWithoutDishesInput;
  where: DishComponentWhereUniqueInput;
};

export type DishComponentWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DishComponentWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishComponentWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishComponentWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  dishes?: InputMaybe<DishListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<StringNullableFilter>;
};

export type DishComponentWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type DishCountAggregateOutputType = {
  __typename?: 'DishCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  url: Scalars['Int'];
};

export type DishCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DishCountOutputType = {
  __typename?: 'DishCountOutputType';
  comments: Scalars['Int'];
  dishComponents: Scalars['Int'];
  meals: Scalars['Int'];
};

export type DishCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  dishComponents?: InputMaybe<DishComponentCreateNestedManyWithoutDishesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutDishesInput>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishCreateNestedManyWithoutDishComponentsInput = {
  connect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishCreateOrConnectWithoutDishComponentsInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishCreateWithoutDishComponentsInput>>>;
};

export type DishCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishCreateOrConnectWithoutMealsInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishCreateWithoutMealsInput>>>;
};

export type DishCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<DishUncheckedCreateWithoutCommentsInput>;
};

export type DishCreateOrConnectWithoutCommentsInput = {
  create: DishUncheckedCreateWithoutCommentsInput;
  where: DishWhereUniqueInput;
};

export type DishCreateOrConnectWithoutDishComponentsInput = {
  create: DishUncheckedCreateWithoutDishComponentsInput;
  where: DishWhereUniqueInput;
};

export type DishCreateOrConnectWithoutMealsInput = {
  create: DishUncheckedCreateWithoutMealsInput;
  where: DishWhereUniqueInput;
};

export type DishCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  dishComponents?: InputMaybe<DishComponentCreateNestedManyWithoutDishesInput>;
  meals?: InputMaybe<MealCreateNestedManyWithoutDishesInput>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishCreateWithoutDishComponentsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  meals?: InputMaybe<MealCreateNestedManyWithoutDishesInput>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishCreateWithoutMealsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  dishComponents?: InputMaybe<DishComponentCreateNestedManyWithoutDishesInput>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishListRelationFilter = {
  every?: InputMaybe<DishWhereInput>;
  none?: InputMaybe<DishWhereInput>;
  some?: InputMaybe<DishWhereInput>;
};

export type DishMaxAggregateOutputType = {
  __typename?: 'DishMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DishMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DishMinAggregateOutputType = {
  __typename?: 'DishMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type DishMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DishOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DishOrderByWithAggregationInput = {
  _avg?: InputMaybe<DishAvgOrderByAggregateInput>;
  _count?: InputMaybe<DishCountOrderByAggregateInput>;
  _max?: InputMaybe<DishMaxOrderByAggregateInput>;
  _min?: InputMaybe<DishMinOrderByAggregateInput>;
  _sum?: InputMaybe<DishSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DishOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dishComponents?: InputMaybe<DishComponentOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  meals?: InputMaybe<MealOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type DishRelationFilter = {
  is?: InputMaybe<DishWhereInput>;
  isNot?: InputMaybe<DishWhereInput>;
};

export enum DishScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Url = 'url'
}

export type DishScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DishScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type DishScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<DishScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  url?: InputMaybe<StringWithAggregatesFilter>;
};

export type DishSumAggregateOutputType = {
  __typename?: 'DishSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type DishSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type DishUncheckedCreateInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishUncheckedCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishUncheckedCreateWithoutDishComponentsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishUncheckedCreateWithoutMealsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutDishInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  url: Scalars['String'];
};

export type DishUncheckedUpdateInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUncheckedUpdateManyWithoutDishesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUncheckedUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUncheckedUpdateWithoutDishComponentsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUncheckedUpdateWithoutMealsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishComponents?: InputMaybe<DishComponentUpdateManyWithoutDishesInput>;
  meals?: InputMaybe<MealUpdateManyWithoutDishesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateManyWithWhereWithoutDishComponentsInput = {
  data: DishUncheckedUpdateManyWithoutDishesInput;
  where: DishScalarWhereInput;
};

export type DishUpdateManyWithWhereWithoutMealsInput = {
  data: DishUncheckedUpdateManyWithoutDishesInput;
  where: DishScalarWhereInput;
};

export type DishUpdateManyWithoutDishComponentsInput = {
  connect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishCreateOrConnectWithoutDishComponentsInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishCreateWithoutDishComponentsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DishScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DishUpdateWithWhereUniqueWithoutDishComponentsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DishUpdateManyWithWhereWithoutDishComponentsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DishUpsertWithWhereUniqueWithoutDishComponentsInput>>>;
};

export type DishUpdateManyWithoutMealsInput = {
  connect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<DishCreateOrConnectWithoutMealsInput>>>;
  create?: InputMaybe<Array<InputMaybe<DishCreateWithoutMealsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<DishScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<DishWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<DishUpdateWithWhereUniqueWithoutMealsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<DishUpdateManyWithWhereWithoutMealsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<DishUpsertWithWhereUniqueWithoutMealsInput>>>;
};

export type DishUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<DishWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DishCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<DishUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<DishUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<DishUpsertWithoutCommentsInput>;
};

export type DishUpdateWithWhereUniqueWithoutDishComponentsInput = {
  data: DishUncheckedUpdateWithoutDishComponentsInput;
  where: DishWhereUniqueInput;
};

export type DishUpdateWithWhereUniqueWithoutMealsInput = {
  data: DishUncheckedUpdateWithoutMealsInput;
  where: DishWhereUniqueInput;
};

export type DishUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishComponents?: InputMaybe<DishComponentUpdateManyWithoutDishesInput>;
  meals?: InputMaybe<MealUpdateManyWithoutDishesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateWithoutDishComponentsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutDishesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpdateWithoutMealsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutDishInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishComponents?: InputMaybe<DishComponentUpdateManyWithoutDishesInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  url?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type DishUpsertWithWhereUniqueWithoutDishComponentsInput = {
  create: DishUncheckedCreateWithoutDishComponentsInput;
  update: DishUncheckedUpdateWithoutDishComponentsInput;
  where: DishWhereUniqueInput;
};

export type DishUpsertWithWhereUniqueWithoutMealsInput = {
  create: DishUncheckedCreateWithoutMealsInput;
  update: DishUncheckedUpdateWithoutMealsInput;
  where: DishWhereUniqueInput;
};

export type DishUpsertWithoutCommentsInput = {
  create: DishUncheckedCreateWithoutCommentsInput;
  update: DishUncheckedUpdateWithoutCommentsInput;
};

export type DishWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<DishWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<DishWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<DishWhereInput>>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  dishComponents?: InputMaybe<DishComponentListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type DishWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Enum = {
  __typename?: 'Enum';
  fields: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Field = {
  __typename?: 'Field';
  create: Scalars['Boolean'];
  editor: Scalars['Boolean'];
  filter: Scalars['Boolean'];
  id: Scalars['String'];
  isId: Scalars['Boolean'];
  kind: KindEnum;
  list: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  read: Scalars['Boolean'];
  relationField?: Maybe<Scalars['Boolean']>;
  required: Scalars['Boolean'];
  sort: Scalars['Boolean'];
  title: Scalars['String'];
  type: Scalars['String'];
  unique: Scalars['Boolean'];
  update: Scalars['Boolean'];
  upload: Scalars['Boolean'];
};

export type Guest = {
  __typename?: 'Guest';
  _count: GuestCountOutputType;
  coffeeRatings: Array<CoffeeRating>;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  meals: Array<Meal>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};


export type GuestCoffeeRatingsArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<CoffeeRatingScalarFieldEnum>;
  orderBy?: InputMaybe<CoffeeRatingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type GuestCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type GuestMealsArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<MealScalarFieldEnum>;
  orderBy?: InputMaybe<MealOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};

export type GuestAvgAggregateOutputType = {
  __typename?: 'GuestAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type GuestAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuestCountAggregateOutputType = {
  __typename?: 'GuestCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type GuestCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type GuestCountOutputType = {
  __typename?: 'GuestCountOutputType';
  coffeeRatings: Scalars['Int'];
  comments: Scalars['Int'];
  meals: Scalars['Int'];
};

export type GuestCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutGuestInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  meals?: InputMaybe<MealCreateNestedManyWithoutGuestsInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestCreateNestedManyWithoutMealsInput = {
  connect?: InputMaybe<Array<InputMaybe<GuestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<GuestCreateOrConnectWithoutMealsInput>>>;
  create?: InputMaybe<Array<InputMaybe<GuestCreateWithoutMealsInput>>>;
};

export type GuestCreateNestedOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuestCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<GuestUncheckedCreateWithoutCoffeeRatingsInput>;
};

export type GuestCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuestCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<GuestUncheckedCreateWithoutCommentsInput>;
};

export type GuestCreateOrConnectWithoutCoffeeRatingsInput = {
  create: GuestUncheckedCreateWithoutCoffeeRatingsInput;
  where: GuestWhereUniqueInput;
};

export type GuestCreateOrConnectWithoutCommentsInput = {
  create: GuestUncheckedCreateWithoutCommentsInput;
  where: GuestWhereUniqueInput;
};

export type GuestCreateOrConnectWithoutMealsInput = {
  create: GuestUncheckedCreateWithoutMealsInput;
  where: GuestWhereUniqueInput;
};

export type GuestCreateWithoutCoffeeRatingsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  meals?: InputMaybe<MealCreateNestedManyWithoutGuestsInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestCreateWithoutCommentsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  meals?: InputMaybe<MealCreateNestedManyWithoutGuestsInput>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestCreateWithoutMealsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingCreateNestedManyWithoutGuestInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestListRelationFilter = {
  every?: InputMaybe<GuestWhereInput>;
  none?: InputMaybe<GuestWhereInput>;
  some?: InputMaybe<GuestWhereInput>;
};

export type GuestMaxAggregateOutputType = {
  __typename?: 'GuestMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type GuestMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type GuestMinAggregateOutputType = {
  __typename?: 'GuestMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type GuestMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type GuestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GuestOrderByWithAggregationInput = {
  _avg?: InputMaybe<GuestAvgOrderByAggregateInput>;
  _count?: InputMaybe<GuestCountOrderByAggregateInput>;
  _max?: InputMaybe<GuestMaxOrderByAggregateInput>;
  _min?: InputMaybe<GuestMinOrderByAggregateInput>;
  _sum?: InputMaybe<GuestSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type GuestOrderByWithRelationInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  meals?: InputMaybe<MealOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type GuestRelationFilter = {
  is?: InputMaybe<GuestWhereInput>;
  isNot?: InputMaybe<GuestWhereInput>;
};

export enum GuestScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type GuestScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<GuestScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<GuestScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<GuestScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
};

export type GuestScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<GuestScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<GuestScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<GuestScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
};

export type GuestSumAggregateOutputType = {
  __typename?: 'GuestSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type GuestSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GuestUncheckedCreateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestUncheckedCreateWithoutCoffeeRatingsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestUncheckedCreateWithoutCommentsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestUncheckedCreateWithoutMealsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedCreateNestedManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutGuestInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type GuestUncheckedUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUncheckedUpdateManyWithoutGuestsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUncheckedUpdateWithoutCoffeeRatingsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUncheckedUpdateWithoutCommentsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUncheckedUpdateWithoutMealsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUncheckedUpdateManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpdateInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutGuestsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpdateManyWithWhereWithoutMealsInput = {
  data: GuestUncheckedUpdateManyWithoutGuestsInput;
  where: GuestScalarWhereInput;
};

export type GuestUpdateManyWithoutMealsInput = {
  connect?: InputMaybe<Array<InputMaybe<GuestWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<GuestCreateOrConnectWithoutMealsInput>>>;
  create?: InputMaybe<Array<InputMaybe<GuestCreateWithoutMealsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<GuestWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<GuestScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<GuestWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<GuestWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<GuestUpdateWithWhereUniqueWithoutMealsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<GuestUpdateManyWithWhereWithoutMealsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<GuestUpsertWithWhereUniqueWithoutMealsInput>>>;
};

export type GuestUpdateOneWithoutCoffeeRatingsInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuestCreateOrConnectWithoutCoffeeRatingsInput>;
  create?: InputMaybe<GuestUncheckedCreateWithoutCoffeeRatingsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuestUncheckedUpdateWithoutCoffeeRatingsInput>;
  upsert?: InputMaybe<GuestUpsertWithoutCoffeeRatingsInput>;
};

export type GuestUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<GuestWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GuestCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<GuestUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<GuestUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<GuestUpsertWithoutCommentsInput>;
};

export type GuestUpdateWithWhereUniqueWithoutMealsInput = {
  data: GuestUncheckedUpdateWithoutMealsInput;
  where: GuestWhereUniqueInput;
};

export type GuestUpdateWithoutCoffeeRatingsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutGuestsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpdateWithoutCommentsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  meals?: InputMaybe<MealUpdateManyWithoutGuestsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpdateWithoutMealsInput = {
  coffeeRatings?: InputMaybe<CoffeeRatingUpdateManyWithoutGuestInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutGuestInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GuestUpsertWithWhereUniqueWithoutMealsInput = {
  create: GuestUncheckedCreateWithoutMealsInput;
  update: GuestUncheckedUpdateWithoutMealsInput;
  where: GuestWhereUniqueInput;
};

export type GuestUpsertWithoutCoffeeRatingsInput = {
  create: GuestUncheckedCreateWithoutCoffeeRatingsInput;
  update: GuestUncheckedUpdateWithoutCoffeeRatingsInput;
};

export type GuestUpsertWithoutCommentsInput = {
  create: GuestUncheckedCreateWithoutCommentsInput;
  update: GuestUncheckedUpdateWithoutCommentsInput;
};

export type GuestWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<GuestWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<GuestWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<GuestWhereInput>>>;
  coffeeRatings?: InputMaybe<CoffeeRatingListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  meals?: InputMaybe<MealListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
};

export type GuestWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum KindEnum {
  Enum = 'enum',
  Object = 'object',
  Scalar = 'scalar'
}

export type Meal = {
  __typename?: 'Meal';
  _count: MealCountOutputType;
  comments: Array<Comment>;
  createdAt: Scalars['DateTime'];
  date: Scalars['DateTime'];
  description: Scalars['String'];
  dishes: Array<Dish>;
  guests: Array<Guest>;
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type MealCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<CommentScalarFieldEnum>;
  orderBy?: InputMaybe<CommentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type MealDishesArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<DishScalarFieldEnum>;
  orderBy?: InputMaybe<DishOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};


export type MealGuestsArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  distinct?: InputMaybe<GuestScalarFieldEnum>;
  orderBy?: InputMaybe<GuestOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};

export type MealAvgAggregateOutputType = {
  __typename?: 'MealAvgAggregateOutputType';
  id?: Maybe<Scalars['Float']>;
};

export type MealAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MealCountAggregateOutputType = {
  __typename?: 'MealCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  date: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type MealCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealCountOutputType = {
  __typename?: 'MealCountOutputType';
  comments: Scalars['Int'];
  dishes: Scalars['Int'];
  guests: Scalars['Int'];
};

export type MealCreateInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  dishes?: InputMaybe<DishCreateNestedManyWithoutMealsInput>;
  guests?: InputMaybe<GuestCreateNestedManyWithoutMealsInput>;
  name: Scalars['String'];
};

export type MealCreateNestedManyWithoutDishesInput = {
  connect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MealCreateOrConnectWithoutDishesInput>>>;
  create?: InputMaybe<Array<InputMaybe<MealCreateWithoutDishesInput>>>;
};

export type MealCreateNestedManyWithoutGuestsInput = {
  connect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MealCreateOrConnectWithoutGuestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<MealCreateWithoutGuestsInput>>>;
};

export type MealCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MealUncheckedCreateWithoutCommentsInput>;
};

export type MealCreateOrConnectWithoutCommentsInput = {
  create: MealUncheckedCreateWithoutCommentsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutDishesInput = {
  create: MealUncheckedCreateWithoutDishesInput;
  where: MealWhereUniqueInput;
};

export type MealCreateOrConnectWithoutGuestsInput = {
  create: MealUncheckedCreateWithoutGuestsInput;
  where: MealWhereUniqueInput;
};

export type MealCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  dishes?: InputMaybe<DishCreateNestedManyWithoutMealsInput>;
  guests?: InputMaybe<GuestCreateNestedManyWithoutMealsInput>;
  name: Scalars['String'];
};

export type MealCreateWithoutDishesInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  guests?: InputMaybe<GuestCreateNestedManyWithoutMealsInput>;
  name: Scalars['String'];
};

export type MealCreateWithoutGuestsInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  dishes?: InputMaybe<DishCreateNestedManyWithoutMealsInput>;
  name: Scalars['String'];
};

export type MealListRelationFilter = {
  every?: InputMaybe<MealWhereInput>;
  none?: InputMaybe<MealWhereInput>;
  some?: InputMaybe<MealWhereInput>;
};

export type MealMaxAggregateOutputType = {
  __typename?: 'MealMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MealMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealMinAggregateOutputType = {
  __typename?: 'MealMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type MealMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MealOrderByWithAggregationInput = {
  _avg?: InputMaybe<MealAvgOrderByAggregateInput>;
  _count?: InputMaybe<MealCountOrderByAggregateInput>;
  _max?: InputMaybe<MealMaxOrderByAggregateInput>;
  _min?: InputMaybe<MealMinOrderByAggregateInput>;
  _sum?: InputMaybe<MealSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealOrderByWithRelationInput = {
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dishes?: InputMaybe<DishOrderByRelationAggregateInput>;
  guests?: InputMaybe<GuestOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type MealRelationFilter = {
  is?: InputMaybe<MealWhereInput>;
  isNot?: InputMaybe<MealWhereInput>;
};

export enum MealScalarFieldEnum {
  CreatedAt = 'createdAt',
  Date = 'date',
  Description = 'description',
  Id = 'id',
  Name = 'name'
}

export type MealScalarWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MealScalarWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MealScalarWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MealScalarWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MealScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<MealScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MealScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MealScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  date?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type MealSumAggregateOutputType = {
  __typename?: 'MealSumAggregateOutputType';
  id?: Maybe<Scalars['Int']>;
};

export type MealSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type MealUncheckedCreateInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type MealUncheckedCreateWithoutCommentsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type MealUncheckedCreateWithoutDishesInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type MealUncheckedCreateWithoutGuestsInput = {
  comments?: InputMaybe<CommentUncheckedCreateNestedManyWithoutMealInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  description: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type MealUncheckedUpdateInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUncheckedUpdateManyWithoutMealsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUncheckedUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUncheckedUpdateWithoutDishesInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUncheckedUpdateWithoutGuestsInput = {
  comments?: InputMaybe<CommentUncheckedUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishes?: InputMaybe<DishUpdateManyWithoutMealsInput>;
  guests?: InputMaybe<GuestUpdateManyWithoutMealsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateManyWithWhereWithoutDishesInput = {
  data: MealUncheckedUpdateManyWithoutMealsInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithWhereWithoutGuestsInput = {
  data: MealUncheckedUpdateManyWithoutMealsInput;
  where: MealScalarWhereInput;
};

export type MealUpdateManyWithoutDishesInput = {
  connect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MealCreateOrConnectWithoutDishesInput>>>;
  create?: InputMaybe<Array<InputMaybe<MealCreateWithoutDishesInput>>>;
  delete?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MealScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MealUpdateWithWhereUniqueWithoutDishesInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MealUpdateManyWithWhereWithoutDishesInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MealUpsertWithWhereUniqueWithoutDishesInput>>>;
};

export type MealUpdateManyWithoutGuestsInput = {
  connect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  connectOrCreate?: InputMaybe<Array<InputMaybe<MealCreateOrConnectWithoutGuestsInput>>>;
  create?: InputMaybe<Array<InputMaybe<MealCreateWithoutGuestsInput>>>;
  delete?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  deleteMany?: InputMaybe<Array<InputMaybe<MealScalarWhereInput>>>;
  disconnect?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  set?: InputMaybe<Array<InputMaybe<MealWhereUniqueInput>>>;
  update?: InputMaybe<Array<InputMaybe<MealUpdateWithWhereUniqueWithoutGuestsInput>>>;
  updateMany?: InputMaybe<Array<InputMaybe<MealUpdateManyWithWhereWithoutGuestsInput>>>;
  upsert?: InputMaybe<Array<InputMaybe<MealUpsertWithWhereUniqueWithoutGuestsInput>>>;
};

export type MealUpdateOneWithoutCommentsInput = {
  connect?: InputMaybe<MealWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MealCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<MealUncheckedCreateWithoutCommentsInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<MealUncheckedUpdateWithoutCommentsInput>;
  upsert?: InputMaybe<MealUpsertWithoutCommentsInput>;
};

export type MealUpdateWithWhereUniqueWithoutDishesInput = {
  data: MealUncheckedUpdateWithoutDishesInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithWhereUniqueWithoutGuestsInput = {
  data: MealUncheckedUpdateWithoutGuestsInput;
  where: MealWhereUniqueInput;
};

export type MealUpdateWithoutCommentsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishes?: InputMaybe<DishUpdateManyWithoutMealsInput>;
  guests?: InputMaybe<GuestUpdateManyWithoutMealsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateWithoutDishesInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  guests?: InputMaybe<GuestUpdateManyWithoutMealsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpdateWithoutGuestsInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutMealInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dishes?: InputMaybe<DishUpdateManyWithoutMealsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type MealUpsertWithWhereUniqueWithoutDishesInput = {
  create: MealUncheckedCreateWithoutDishesInput;
  update: MealUncheckedUpdateWithoutDishesInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithWhereUniqueWithoutGuestsInput = {
  create: MealUncheckedCreateWithoutGuestsInput;
  update: MealUncheckedUpdateWithoutGuestsInput;
  where: MealWhereUniqueInput;
};

export type MealUpsertWithoutCommentsInput = {
  create: MealUncheckedCreateWithoutCommentsInput;
  update: MealUncheckedUpdateWithoutCommentsInput;
};

export type MealWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<MealWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<MealWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<MealWhereInput>>>;
  comments?: InputMaybe<CommentListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  dishes?: InputMaybe<DishListRelationFilter>;
  guests?: InputMaybe<GuestListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type MealWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Model = {
  __typename?: 'Model';
  create: Scalars['Boolean'];
  delete: Scalars['Boolean'];
  displayFields: Array<Scalars['String']>;
  fields: Array<Field>;
  id: Scalars['String'];
  idField: Scalars['String'];
  name: Scalars['String'];
  update: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCoffee: Coffee;
  createOneCoffeeMachine: CoffeeMachine;
  createOneCoffeeRating: CoffeeRating;
  createOneCoffeeType: CoffeeType;
  createOneComment: Comment;
  createOneDish: Dish;
  createOneDishComponent: DishComponent;
  createOneGuest: Guest;
  createOneMeal: Meal;
  createOneUser: User;
  deleteManyCoffee: BatchPayload;
  deleteManyCoffeeMachine: BatchPayload;
  deleteManyCoffeeRating: BatchPayload;
  deleteManyCoffeeType: BatchPayload;
  deleteManyComment: BatchPayload;
  deleteManyDish: BatchPayload;
  deleteManyDishComponent: BatchPayload;
  deleteManyGuest: BatchPayload;
  deleteManyMeal: BatchPayload;
  deleteManyUser: BatchPayload;
  deleteOneCoffee?: Maybe<Coffee>;
  deleteOneCoffeeMachine?: Maybe<CoffeeMachine>;
  deleteOneCoffeeRating?: Maybe<CoffeeRating>;
  deleteOneCoffeeType?: Maybe<CoffeeType>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneDish?: Maybe<Dish>;
  deleteOneDishComponent?: Maybe<DishComponent>;
  deleteOneGuest?: Maybe<Guest>;
  deleteOneMeal?: Maybe<Meal>;
  deleteOneUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  signup?: Maybe<User>;
  updateField: Field;
  updateManyCoffee: BatchPayload;
  updateManyCoffeeMachine: BatchPayload;
  updateManyCoffeeRating: BatchPayload;
  updateManyCoffeeType: BatchPayload;
  updateManyComment: BatchPayload;
  updateManyDish: BatchPayload;
  updateManyDishComponent: BatchPayload;
  updateManyGuest: BatchPayload;
  updateManyMeal: BatchPayload;
  updateManyUser: BatchPayload;
  updateModel: Model;
  updateOneCoffee: Coffee;
  updateOneCoffeeMachine: CoffeeMachine;
  updateOneCoffeeRating: CoffeeRating;
  updateOneCoffeeType: CoffeeType;
  updateOneComment: Comment;
  updateOneDish: Dish;
  updateOneDishComponent: DishComponent;
  updateOneGuest: Guest;
  updateOneMeal: Meal;
  updateOneUser: User;
  updatePassword?: Maybe<Scalars['Boolean']>;
  upsertOneCoffee: Coffee;
  upsertOneCoffeeMachine: CoffeeMachine;
  upsertOneCoffeeRating: CoffeeRating;
  upsertOneCoffeeType: CoffeeType;
  upsertOneComment: Comment;
  upsertOneDish: Dish;
  upsertOneDishComponent: DishComponent;
  upsertOneGuest: Guest;
  upsertOneMeal: Meal;
  upsertOneUser: User;
};


export type MutationCreateOneCoffeeArgs = {
  data: CoffeeCreateInput;
};


export type MutationCreateOneCoffeeMachineArgs = {
  data: CoffeeMachineCreateInput;
};


export type MutationCreateOneCoffeeRatingArgs = {
  data: CoffeeRatingCreateInput;
};


export type MutationCreateOneCoffeeTypeArgs = {
  data: CoffeeTypeCreateInput;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
};


export type MutationCreateOneDishArgs = {
  data: DishCreateInput;
};


export type MutationCreateOneDishComponentArgs = {
  data: DishComponentCreateInput;
};


export type MutationCreateOneGuestArgs = {
  data: GuestCreateInput;
};


export type MutationCreateOneMealArgs = {
  data: MealCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyCoffeeArgs = {
  where?: InputMaybe<CoffeeWhereInput>;
};


export type MutationDeleteManyCoffeeMachineArgs = {
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type MutationDeleteManyCoffeeRatingArgs = {
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type MutationDeleteManyCoffeeTypeArgs = {
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyDishArgs = {
  where?: InputMaybe<DishWhereInput>;
};


export type MutationDeleteManyDishComponentArgs = {
  where?: InputMaybe<DishComponentWhereInput>;
};


export type MutationDeleteManyGuestArgs = {
  where?: InputMaybe<GuestWhereInput>;
};


export type MutationDeleteManyMealArgs = {
  where?: InputMaybe<MealWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteOneCoffeeArgs = {
  where: CoffeeWhereUniqueInput;
};


export type MutationDeleteOneCoffeeMachineArgs = {
  where: CoffeeMachineWhereUniqueInput;
};


export type MutationDeleteOneCoffeeRatingArgs = {
  where: CoffeeRatingWhereUniqueInput;
};


export type MutationDeleteOneCoffeeTypeArgs = {
  where: CoffeeTypeWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneDishArgs = {
  where: DishWhereUniqueInput;
};


export type MutationDeleteOneDishComponentArgs = {
  where: DishComponentWhereUniqueInput;
};


export type MutationDeleteOneGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type MutationDeleteOneMealArgs = {
  where: MealWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};


export type MutationUpdateFieldArgs = {
  data: UpdateFieldInput;
  id: Scalars['String'];
  modelId: Scalars['String'];
};


export type MutationUpdateManyCoffeeArgs = {
  data: CoffeeUpdateManyMutationInput;
  where?: InputMaybe<CoffeeWhereInput>;
};


export type MutationUpdateManyCoffeeMachineArgs = {
  data: CoffeeMachineUpdateManyMutationInput;
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type MutationUpdateManyCoffeeRatingArgs = {
  data: CoffeeRatingUpdateManyMutationInput;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type MutationUpdateManyCoffeeTypeArgs = {
  data: CoffeeTypeUpdateManyMutationInput;
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyDishArgs = {
  data: DishUpdateManyMutationInput;
  where?: InputMaybe<DishWhereInput>;
};


export type MutationUpdateManyDishComponentArgs = {
  data: DishComponentUpdateManyMutationInput;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type MutationUpdateManyGuestArgs = {
  data: GuestUpdateManyMutationInput;
  where?: InputMaybe<GuestWhereInput>;
};


export type MutationUpdateManyMealArgs = {
  data: MealUpdateManyMutationInput;
  where?: InputMaybe<MealWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateModelArgs = {
  data: UpdateModelInput;
  id: Scalars['String'];
};


export type MutationUpdateOneCoffeeArgs = {
  data: CoffeeUpdateInput;
  where: CoffeeWhereUniqueInput;
};


export type MutationUpdateOneCoffeeMachineArgs = {
  data: CoffeeMachineUpdateInput;
  where: CoffeeMachineWhereUniqueInput;
};


export type MutationUpdateOneCoffeeRatingArgs = {
  data: CoffeeRatingUpdateInput;
  where: CoffeeRatingWhereUniqueInput;
};


export type MutationUpdateOneCoffeeTypeArgs = {
  data: CoffeeTypeUpdateInput;
  where: CoffeeTypeWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneDishArgs = {
  data: DishUpdateInput;
  where: DishWhereUniqueInput;
};


export type MutationUpdateOneDishComponentArgs = {
  data: DishComponentUpdateInput;
  where: DishComponentWhereUniqueInput;
};


export type MutationUpdateOneGuestArgs = {
  data: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpdateOneMealArgs = {
  data: MealUpdateInput;
  where: MealWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdatePasswordArgs = {
  currentPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpsertOneCoffeeArgs = {
  create: CoffeeCreateInput;
  update: CoffeeUpdateInput;
  where: CoffeeWhereUniqueInput;
};


export type MutationUpsertOneCoffeeMachineArgs = {
  create: CoffeeMachineCreateInput;
  update: CoffeeMachineUpdateInput;
  where: CoffeeMachineWhereUniqueInput;
};


export type MutationUpsertOneCoffeeRatingArgs = {
  create: CoffeeRatingCreateInput;
  update: CoffeeRatingUpdateInput;
  where: CoffeeRatingWhereUniqueInput;
};


export type MutationUpsertOneCoffeeTypeArgs = {
  create: CoffeeTypeCreateInput;
  update: CoffeeTypeUpdateInput;
  where: CoffeeTypeWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneDishArgs = {
  create: DishCreateInput;
  update: DishUpdateInput;
  where: DishWhereUniqueInput;
};


export type MutationUpsertOneDishComponentArgs = {
  create: DishComponentCreateInput;
  update: DishComponentUpdateInput;
  where: DishComponentWhereUniqueInput;
};


export type MutationUpsertOneGuestArgs = {
  create: GuestCreateInput;
  update: GuestUpdateInput;
  where: GuestWhereUniqueInput;
};


export type MutationUpsertOneMealArgs = {
  create: MealCreateInput;
  update: MealUpdateInput;
  where: MealWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCoffee?: Maybe<AggregateCoffee>;
  aggregateCoffeeMachine?: Maybe<AggregateCoffeeMachine>;
  aggregateCoffeeRating?: Maybe<AggregateCoffeeRating>;
  aggregateCoffeeType?: Maybe<AggregateCoffeeType>;
  aggregateComment?: Maybe<AggregateComment>;
  aggregateDish?: Maybe<AggregateDish>;
  aggregateDishComponent?: Maybe<AggregateDishComponent>;
  aggregateGuest?: Maybe<AggregateGuest>;
  aggregateMeal?: Maybe<AggregateMeal>;
  aggregateUser?: Maybe<AggregateUser>;
  findFirstCoffee?: Maybe<Coffee>;
  findFirstCoffeeMachine?: Maybe<CoffeeMachine>;
  findFirstCoffeeRating?: Maybe<CoffeeRating>;
  findFirstCoffeeType?: Maybe<CoffeeType>;
  findFirstComment?: Maybe<Comment>;
  findFirstDish?: Maybe<Dish>;
  findFirstDishComponent?: Maybe<DishComponent>;
  findFirstGuest?: Maybe<Guest>;
  findFirstMeal?: Maybe<Meal>;
  findFirstUser?: Maybe<User>;
  findManyCoffee: Array<Coffee>;
  findManyCoffeeCount: Scalars['Int'];
  findManyCoffeeMachine: Array<CoffeeMachine>;
  findManyCoffeeMachineCount: Scalars['Int'];
  findManyCoffeeRating: Array<CoffeeRating>;
  findManyCoffeeRatingCount: Scalars['Int'];
  findManyCoffeeType: Array<CoffeeType>;
  findManyCoffeeTypeCount: Scalars['Int'];
  findManyComment: Array<Comment>;
  findManyCommentCount: Scalars['Int'];
  findManyDish: Array<Dish>;
  findManyDishComponent: Array<DishComponent>;
  findManyDishComponentCount: Scalars['Int'];
  findManyDishCount: Scalars['Int'];
  findManyGuest: Array<Guest>;
  findManyGuestCount: Scalars['Int'];
  findManyMeal: Array<Meal>;
  findManyMealCount: Scalars['Int'];
  findManyUser: Array<User>;
  findManyUserCount: Scalars['Int'];
  findUniqueCoffee?: Maybe<Coffee>;
  findUniqueCoffeeMachine?: Maybe<CoffeeMachine>;
  findUniqueCoffeeRating?: Maybe<CoffeeRating>;
  findUniqueCoffeeType?: Maybe<CoffeeType>;
  findUniqueComment?: Maybe<Comment>;
  findUniqueDish?: Maybe<Dish>;
  findUniqueDishComponent?: Maybe<DishComponent>;
  findUniqueGuest?: Maybe<Guest>;
  findUniqueMeal?: Maybe<Meal>;
  findUniqueUser?: Maybe<User>;
  getSchema: Schema;
  me?: Maybe<User>;
};


export type QueryAggregateCoffeeArgs = {
  cursor?: InputMaybe<CoffeeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeWhereInput>;
};


export type QueryAggregateCoffeeMachineArgs = {
  cursor?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeMachineOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type QueryAggregateCoffeeRatingArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeRatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type QueryAggregateCoffeeTypeArgs = {
  cursor?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeTypeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateDishArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<DishOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryAggregateDishComponentArgs = {
  cursor?: InputMaybe<DishComponentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<DishComponentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type QueryAggregateGuestArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryAggregateMealArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<MealOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstCoffeeArgs = {
  cursor?: InputMaybe<CoffeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeWhereInput>;
};


export type QueryFindFirstCoffeeMachineArgs = {
  cursor?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeMachineOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type QueryFindFirstCoffeeRatingArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeRatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type QueryFindFirstCoffeeTypeArgs = {
  cursor?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeTypeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstDishArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindFirstDishComponentArgs = {
  cursor?: InputMaybe<DishComponentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishComponentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishComponentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type QueryFindFirstGuestArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<GuestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryFindFirstMealArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MealScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MealOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyCoffeeArgs = {
  cursor?: InputMaybe<CoffeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeWhereInput>;
};


export type QueryFindManyCoffeeCountArgs = {
  cursor?: InputMaybe<CoffeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeWhereInput>;
};


export type QueryFindManyCoffeeMachineArgs = {
  cursor?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeMachineOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type QueryFindManyCoffeeMachineCountArgs = {
  cursor?: InputMaybe<CoffeeMachineWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeMachineScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeMachineOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeMachineWhereInput>;
};


export type QueryFindManyCoffeeRatingArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeRatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type QueryFindManyCoffeeRatingCountArgs = {
  cursor?: InputMaybe<CoffeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeRatingScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeRatingOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeRatingWhereInput>;
};


export type QueryFindManyCoffeeTypeArgs = {
  cursor?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeTypeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type QueryFindManyCoffeeTypeCountArgs = {
  cursor?: InputMaybe<CoffeeTypeWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CoffeeTypeScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CoffeeTypeOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CoffeeTypeWhereInput>;
};


export type QueryFindManyCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindManyCommentCountArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<CommentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<CommentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindManyDishArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindManyDishComponentArgs = {
  cursor?: InputMaybe<DishComponentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishComponentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishComponentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type QueryFindManyDishComponentCountArgs = {
  cursor?: InputMaybe<DishComponentWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishComponentScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishComponentOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishComponentWhereInput>;
};


export type QueryFindManyDishCountArgs = {
  cursor?: InputMaybe<DishWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<DishScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<DishOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DishWhereInput>;
};


export type QueryFindManyGuestArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<GuestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryFindManyGuestCountArgs = {
  cursor?: InputMaybe<GuestWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<GuestScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<GuestOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GuestWhereInput>;
};


export type QueryFindManyMealArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MealScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MealOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryFindManyMealCountArgs = {
  cursor?: InputMaybe<MealWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<MealScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<MealOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MealWhereInput>;
};


export type QueryFindManyUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyUserCountArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<InputMaybe<UserScalarFieldEnum>>>;
  orderBy?: InputMaybe<Array<InputMaybe<UserOrderByWithRelationInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueCoffeeArgs = {
  where: CoffeeWhereUniqueInput;
};


export type QueryFindUniqueCoffeeMachineArgs = {
  where: CoffeeMachineWhereUniqueInput;
};


export type QueryFindUniqueCoffeeRatingArgs = {
  where: CoffeeRatingWhereUniqueInput;
};


export type QueryFindUniqueCoffeeTypeArgs = {
  where: CoffeeTypeWhereUniqueInput;
};


export type QueryFindUniqueCommentArgs = {
  where: CommentWhereUniqueInput;
};


export type QueryFindUniqueDishArgs = {
  where: DishWhereUniqueInput;
};


export type QueryFindUniqueDishComponentArgs = {
  where: DishComponentWhereUniqueInput;
};


export type QueryFindUniqueGuestArgs = {
  where: GuestWhereUniqueInput;
};


export type QueryFindUniqueMealArgs = {
  where: MealWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export type Schema = {
  __typename?: 'Schema';
  enums: Array<Enum>;
  models: Array<Model>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type UpdateFieldInput = {
  create?: InputMaybe<Scalars['Boolean']>;
  editor?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  isId?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<KindEnum>;
  list?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  read?: InputMaybe<Scalars['Boolean']>;
  relationField?: InputMaybe<Scalars['Boolean']>;
  required?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  unique?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<Scalars['Boolean']>;
  upload?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateModelInput = {
  create?: InputMaybe<Scalars['Boolean']>;
  delete?: InputMaybe<Scalars['Boolean']>;
  displayFields?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fields?: InputMaybe<Array<InputMaybe<UpdateFieldInput>>>;
  idField?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  update?: InputMaybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  groupId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserAvgAggregateOutputType = {
  __typename?: 'UserAvgAggregateOutputType';
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GroupId = 'groupId',
  Id = 'id',
  Name = 'name',
  Password = 'password'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserScalarWhereWithAggregatesInput>>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  groupId?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregateOutputType = {
  __typename?: 'UserSumAggregateOutputType';
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type UserUncheckedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  groupId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserUncheckedUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUncheckedUpdateManyInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  groupId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  NOT?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<UserWhereInput>>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  groupId?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringNullableFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, name?: string | undefined, email: string } | undefined };


export const MeDocument = gql`
    query me {
  me {
    id
    name
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;