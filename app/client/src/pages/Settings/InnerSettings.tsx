import { Select, Text } from "../../components/commons";
import { SettingsItems } from "../../enums/SettingsItems";
import { MODES, currencies } from "../../utils/constants";
import { ActiveItems } from "./Settings";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type InnerSettingsProps = {
    activeItem: ActiveItems;
};

const InnerSettings = ({ activeItem }: InnerSettingsProps) => {
    const languageOptions = [
        {
            label: "English",
            value: "en",
        },
    ];

    const networkOptions = MODES.map((item) => ({
        label: item.type,
        value: item.wsUrl,
    }));

    return (
        <>
            <Text size="lg" weight="medium">
                {activeItem}
            </Text>
            {activeItem === SettingsItems.GENERAL && (
                <>
                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Language</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Choose your language
                            </Text>
                        </div>
                        <Select
                            placeholder={languageOptions[0].label}
                            options={languageOptions}
                            isBorderStyle
                        />
                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>
                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Currency</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Choose your preferred currency
                            </Text>
                        </div>
                        <Select
                            placeholder={currencies[0].label}
                            options={currencies}
                            isBorderStyle
                        />
                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>
                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Network</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Change network
                            </Text>
                        </div>
                        <Select
                            placeholder={networkOptions[0].label}
                            options={networkOptions}
                            isBorderStyle
                        />
                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>
                </>
            )}
            {activeItem === SettingsItems.ABOUT && (
                <>
                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Want to learn more about Qwallet?</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Visit the website, learn and explore opportunities with us!
                            </Text>
                        </div>

                        <a href="https://qsilver.org/" target="_blank" rel="noopener noreferrer" className="px-7 py-1.5 font-Inter font-medium text-xs border border-white rounded-md outline-none hover:bg-white/5 transition-all duration-200 flex">
                            Visit Website
                            <ArrowTopRightOnSquareIcon className="h-4 pl-4" />
                        </a>

                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>
                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Do you want to collaborate with us?</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Tell us about yourself.
                            </Text>
                        </div>

                        <a href="https://qsilver.org/contact/collaboration" target="_blank" rel="noopener noreferrer" className="px-7 py-1.5 font-Inter font-medium text-xs border border-white rounded-md outline-none hover:bg-white/5 transition-all duration-200 flex">
                            Collaborate
                            <ArrowTopRightOnSquareIcon className="h-4 pl-4" />
                        </a>

                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Help us make improvements</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                New Feature?, Improvement? or found a bug? Tell us here.
                            </Text>
                        </div>

                        <a href="https://qsilver.org/contact/feedback" target="_blank" rel="noopener noreferrer" className="px-7 py-1.5 font-Inter font-medium text-xs border border-white rounded-md outline-none hover:bg-white/5 transition-all duration-200 flex">
                            Feedback
                            <ArrowTopRightOnSquareIcon className="h-4 pl-4" />
                        </a>

                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Development requests for new products</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Turn your idea into reality with us
                            </Text>
                        </div>

                        <a href="https://qsilver.org/contact/new-products" target="_blank" rel="noopener noreferrer" className="px-7 py-1.5 font-Inter font-medium text-xs border border-white rounded-md outline-none hover:bg-white/5 transition-all duration-200 flex">
                            New Product
                            <ArrowTopRightOnSquareIcon className="h-4 pl-4" />
                        </a>

                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>

                    <div className="relative w-full flex justify-between items-center">
                        <div className="flex flex-col space">
                            <Text weight="medium">Contact us</Text>
                            <Text size="sm" weight="medium" className="mt-2.5">
                                Need something else? We would like to hear from you.
                            </Text>
                        </div>

                        <a href="https://qsilver.org/contact/contact" target="_blank" rel="noopener noreferrer" className="px-7 py-1.5 font-Inter font-medium text-xs border border-white rounded-md outline-none hover:bg-white/5 transition-all duration-200 flex">
                            Contact us
                            <ArrowTopRightOnSquareIcon className="h-4 pl-4" />
                        </a>

                        <div className="absolute -bottom-4 w-full">
                            <div className="w-full h-[0.5px] bg-inactive"></div>
                            <div className="absolute right-0 -top-[1.5px] w-[3px] h-[3px] bg-inactive rounded-full"></div>
                        </div>
                    </div>

                </>
            )}
        </>
    );
};

export default InnerSettings;
