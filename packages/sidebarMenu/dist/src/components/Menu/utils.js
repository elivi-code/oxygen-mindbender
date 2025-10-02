export const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
    });
};
export function getCustomButtonOverrideProps(customCheck, { linkComponent, link, linkProp }) {
    if (!customCheck) {
        return {};
    }
    if (!linkComponent || !link || !linkProp) {
        return {};
    }
    return {
        as: linkComponent,
        [linkProp]: link,
    };
}
