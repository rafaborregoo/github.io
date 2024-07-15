document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch('components/header.html')
        .then(response => response.text())
        .then(data => document.getElementById('header-placeholder').innerHTML = data)
        .catch(error => console.error('Error loading header:', error));


    // Load main content
    fetch('components/main.html')
        .then(response => response.text())
        .then(data => document.getElementById('main-placeholder').innerHTML = data)
        .catch(error => console.error('Error loading main content:', error));


    // Load color bar
    fetch('components/color-bar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('color-bar-placeholder').innerHTML = data;

            // Define color palettes
            const colorPalettes = {
                red: {
                    backgroundColor: '#ff0000',
                    textColor: '#ffffff',
                    headerBackgroundColor: '#cc0000',
                    footerBackgroundColor: '#cc0000',
                    productsFile: 'red-products.html'
                },
                orange: {
                    backgroundColor: '#ff8000',
                    textColor: '#000000',
                    headerBackgroundColor: '#cc6600',
                    footerBackgroundColor: '#cc6600'
                },
                yellow: {
                    backgroundColor: '#ffff00',
                    textColor: '#000000',
                    headerBackgroundColor: '#cccc00',
                    footerBackgroundColor: '#cccc00'
                },
                lightgreen: {
                    backgroundColor: '#80ff00',
                    textColor: '#000000',
                    headerBackgroundColor: '#66cc00',
                    footerBackgroundColor: '#66cc00'
                },
                green: {
                    backgroundColor: '#00ff00',
                    textColor: '#000000',
                    headerBackgroundColor: '#00cc00',
                    footerBackgroundColor: '#00cc00'
                },
                lightblue: {
                    backgroundColor: '#00ff80',
                    textColor: '#000000',
                    headerBackgroundColor: '#00cc66',
                    footerBackgroundColor: '#00cc66'
                },
                cyan: {
                    backgroundColor: '#00ffff',
                    textColor: '#000000',
                    headerBackgroundColor: '#00cccc',
                    footerBackgroundColor: '#00cccc'
                },
                blue: {
                    backgroundColor: '#0080ff',
                    textColor: '#ffffff',
                    headerBackgroundColor: '#0066cc',
                    footerBackgroundColor: '#0066cc'
                },
                darkblue: {
                    backgroundColor: '#0000ff',
                    textColor: '#ffffff',
                    headerBackgroundColor: '#0000cc',
                    footerBackgroundColor: '#0000cc'
                },
                purple: {
                    backgroundColor: '#8000ff',
                    textColor: '#ffffff',
                    headerBackgroundColor: '#6600cc',
                    footerBackgroundColor: '#6600cc'
                },
                magenta: {
                    backgroundColor: '#ff00ff',
                    textColor: '#000000',
                    headerBackgroundColor: '#cc00cc',
                    footerBackgroundColor: '#cc00cc'
                },
                pink: {
                    backgroundColor: '#ff0080',
                    textColor: '#000000',
                    headerBackgroundColor: '#cc0066',
                    footerBackgroundColor: '#cc0066'
                }
                // Añade más paletas de colores según sea necesario
            };

             // Add event listener for color selection
             const colors = document.querySelectorAll('.color');
             const colorText = document.getElementById('selected-color-text');
             const colorBar = document.querySelector('.color-bar');
             const productSection = document.getElementById('product-section');
             colors.forEach(color => {
                 color.addEventListener('click', function() {
                     // Remove selected class from all colors
                     colors.forEach(c => c.classList.remove('selected'));
                     // Add selected class to the clicked color
                     this.classList.add('selected');
                     // Get the selected color
                     const selectedColor = this.getAttribute('data-color');
                     const palette = colorPalettes[selectedColor];
                     
                     // Update selected color text
                     colorText.textContent = palette.backgroundColor;
                     colorText.style.color = palette.textColor;
 
                     // Apply the selected color palette to the page
                     document.body.style.backgroundColor = palette.backgroundColor;
                     document.body.style.color = palette.textColor;
                     document.querySelector('header').style.backgroundColor = palette.headerBackgroundColor;
                     document.querySelector('header').style.color = palette.textColor;
                     document.querySelector('footer').style.backgroundColor = palette.footerBackgroundColor;
                     document.querySelector('footer').style.color = palette.textColor;
 
                     // Load the corresponding products file
                     fetch('components/' + palette.productsFile)
                         .then(response => response.text())
                         .then(data => {
                             productSection.innerHTML = data;
                         })
                         .catch(error => console.error('Error loading products:', error));
 
                     // Apply the selected color and blur effect to the color bar
                     colorBar.style.backgroundColor = palette.backgroundColor;
                     colorBar.classList.add('blur');
                     setTimeout(() => colorBar.classList.remove('blur'), 300); // Remove blur effect after 300ms
                 });
             });
         })
         .catch(error => console.error('Error loading color bar:', error));
 
     // Load footer
     fetch('components/footer.html')
         .then(response => response.text())
         .then(data => document.getElementById('footer-placeholder').innerHTML = data)
         .catch(error => console.error('Error loading footer:', error));
 });