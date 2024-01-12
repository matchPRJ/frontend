export interface Option {
    value: string;
    label: string;
}

export const selectOptions: Option[] = [
    { value: '', label: '선택' },
    { value: 'n', label: '닉네임' },
    { value: 't', label: '제목' }
] 