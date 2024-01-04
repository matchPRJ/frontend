import '../../css/CarMenu.css';
import {AccordionItem, TextAccordion} from '../modules/CarSearch/Accordion';
import { typeOptions, oilOptions, brandOptions, tagOptions } from '../Data/CarSearch/OptionsData';

const CarMenu = () => {
    
    
    return(
        <div className="menu">
            <TextAccordion title="차 이름" />
            <AccordionItem title="국산/수입" options={tagOptions} />
            <AccordionItem title="차종" options={typeOptions} />
            <AccordionItem title="브랜드" options={brandOptions} />
            <AccordionItem title="연료" options={oilOptions} />
            <AccordionItem title="가격" options={[]} />
            <AccordionItem title="연식" options={[]} />
            <AccordionItem title="주행거리" options={[]} />
            <div>
                <button className='button'>검색</button>
            </div>
        </div>
    );
}

export default CarMenu;