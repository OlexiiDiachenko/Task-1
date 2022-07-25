const tabs = document.querySelectorAll('.filter-menu')
const activeTabClassName = 'active-booking'

const tabClick = ({ target }) => {
    const tab = target.closest("[data-tab]")
    const sameTabClicked = tab.classList.contains(activeTabClassName)

    if (!tab) {
        return
    }

    tabs.forEach(node => {
        if (node.classList.contains(activeTabClassName) && !sameTabClicked) {
            node.classList.remove(activeTabClassName)
        }
    });

    if (!sameTabClicked) {
        tab.classList.add(activeTabClassName);
    }

    // document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'));
    // document.querySelector(`#${tab}`).classList.remove('hidden');
};

const bindTabs = () => {
    tabs.forEach(node => {
        node.addEventListener('click', tabClick);
    })
};

document.addEventListener('DOMContentLoaded', () => {
    bindTabs();
});
