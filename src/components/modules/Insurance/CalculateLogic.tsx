import { Products } from "../../Data/Insurance/InsuranceData";

export const calculateLogic = (selectedAge: string, selectedCar: string, selectedKm: string) => {
    // 각각의 atype, ctype, ktype에 대한 가장 낮은/높은 value 값을 계산
    let AtypeValue = Infinity;
    let CtypeValue = Infinity;
    let KtypeValue = -Infinity;

    for (let i = 0; i < Products.length; i++) {
        const requirements = Products[i].requirements;

        for (let j = 0; j < requirements.length; j++) {
            const requirement = requirements[j];

            if (requirement.atype === selectedAge && requirement.value < AtypeValue) {
                AtypeValue = requirement.value;
            }
            if (requirement.ctype === selectedCar && requirement.value < CtypeValue) {
                CtypeValue = requirement.value;
            }
            if (requirement.ktype === selectedKm && requirement.value > KtypeValue) {
                KtypeValue = requirement.value;
            }
        }
    }

    // 선택된 값과 일치하는 type 항목에서 계산된 최솟값/최댓값에 해당하는 보험사 이름을 반환
    const ageRecommendation = Products.find(product =>
        product.requirements.some(req => req.atype === selectedAge && req.value === AtypeValue)
    )?.name || '보험사1';

    const carRecommendation = Products.find(product =>
        product.requirements.some(req => req.ctype === selectedCar && req.value === CtypeValue)
    )?.name || '보험사2';

    const kmRecommendation = Products.find(product =>
        product.requirements.some(req => req.ktype === selectedKm && req.value === KtypeValue)
    )?.name || '보험사3';

    return [ageRecommendation, carRecommendation, kmRecommendation];
};