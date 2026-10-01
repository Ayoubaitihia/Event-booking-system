import { MdLaptopWindows } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { LuBrush } from "react-icons/lu";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { PiBowlFood } from "react-icons/pi";
import { RiMentalHealthLine } from "react-icons/ri";
import { LiaSwatchbookSolid } from "react-icons/lia";
import { RiUserCommunityLine } from "react-icons/ri";


export const CATEGORIES = [
    {id: 1, name: "Tech",   slug: 'tech',   icon: MdLaptopWindows},
    {id: 2, name: "Music",   slug: 'music',   icon: IoMusicalNotesOutline},
    {id: 3, name: "Arts",   slug: 'arts',   icon: LuBrush},
    {id: 4, name: "Sports",   slug: 'sports',   icon: MdOutlineSportsBasketball},
    {id: 5, name: "Workshop",   slug: 'workshop',   icon: GrWorkshop},
    {id: 6, name: "Business",   slug: 'business',   icon: LuBriefcaseBusiness},
    {id: 7, name: "Food",   slug: 'food',   icon: PiBowlFood},
    {id: 8, name: "Health",   slug: 'health',   icon: RiMentalHealthLine},
    {id: 9, name: "Education",   slug: 'education',   icon: LiaSwatchbookSolid},
    {id: 10, name: "Community",   slug: 'community',   icon: RiUserCommunityLine},
]