<script>
    var Webflow = Webflow || [];
    Webflow.push(function () {
        // DOMready has fired
        // May now use jQuery and Webflow api
        setTimeout(async () => {
            const checkedElements = document.querySelectorAll('.checkbox-element-wrapper, .filter-dropdown');
            console.log(checkedElements.length);
            checkedElements.forEach(ele => {
                ele.addEventListener('mouseup', () => setTimeout(async () => {
                    var filters = await filtersGeneration();
                    await makeChanges(filters);
                }, 100))
            })
            async function filtersGeneration() {
                const checkedElements = document.getElementsByClassName('checkbox-element-wrapper');
                var filters = {};
                if (checkedElements) {
                    await checkedElements.forEach(async (element) => {

                        const i = element.childNodes[0];
                        const Clist = await i.classList;
                        if (Clist.contains('fs-cmsfilter_active')) {

                            const j = i.childNodes[2];
                            const attr = j.getAttribute('fs-cmsfilter-field');
                            if (Object.keys(filters).includes(attr)) {
                                filters[attr] += 1;
                            } else {
                                filters[attr] = 1;
                            }
                        }
                    });
                }
                return filters;
            }
            async function makeChanges(filters) {
	    const main_category_indicator = document.getElementsByClassName('main-indicator-txt')
            main_category_indicator.forEach(ele => {
            console.log('none');
                ele.style.display = 'none';
            })
                const filterIndicators = document.getElementsByClassName('filter-span');
                await filterIndicators.forEach(element => {
                    element.innerText = 0;
			//Changed
			console.log(element)
                    element.parentElement.parentElement.style.display = 'none';
                    element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].style.display = 'none'
                })
                if (Object.keys(filters).length > 0) {
                    const keys = Object.keys(filters);
                    for (var i = 0; i < keys.length; i++) {
                        const spanToBeChanged = document.getElementById(keys[i]);
                        spanToBeChanged.innerText = filters[keys[i]];
                        spanToBeChanged.style.display = 'flex';
                        spanToBeChanged.parentElement.parentElement.style.display = 'flex';
                        spanToBeChanged.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].style.display = 'flex'
                    }
                }
                
                const checkedSingleElements = Array.from(document.getElementsByClassName('fs-cmsfilter_active'));
                if (checkedSingleElements) {
                    checkedSingleElements.forEach(async (ele) => {
                        console.log(ele)
                        const clist = await ele.classList
                        if (clist.contains('single')) {
                        console.log('flex');
                            ele.parentElement.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[0].style.display = 'flex'
                        }
                    })
                }
            }
            
            var filters = await filtersGeneration();
            await makeChanges(filters);
        }, 4000)
    });
</script>
