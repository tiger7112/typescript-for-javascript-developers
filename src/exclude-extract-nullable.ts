export{};

// Exclude 第二引数に指定した型を抜く
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string|number>;
type NonfunctionType = Exclude<SomeTypes, DebugType>;
type ExcludingFunction = Exclude<SomeTypes, Function>; // 関数の型をまとめて削除できる

// Extract 第二引数に指定した型を残す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string|number>;
type FunctionTypeExtracting = Extract<SomeTypes, Function>;

// NonNullable null or undefinedを抜く
type NullableTypes = string | number | null | undefined;
type NonnullableTypes = NonNullable<NullableTypes>;