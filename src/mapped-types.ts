export{};

type Profile = {
    name: string;
    age: number;
};

type PartialProfile = Partial<Profile>;
type optional<T> = {
    [P in keyof T]?: T[P] | null;
};

type OptialProfile = optional<Profile>;


// 内容：mapped type 
// [P in keyof T]?: T[P]
// typeのプロパティの中身を繰り返しで取得している処理