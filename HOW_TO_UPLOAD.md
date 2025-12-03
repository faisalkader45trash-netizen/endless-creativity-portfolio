# How to Upload Your Work

Adding your own images to the website is easy. You do not need to edit any HTML.

## Step 1: Add Your Image File
1.  Copy your image file (e.g., `my-photo.jpg`) into the `images` folder of this project.
    - *Tip: Keep the file size reasonable (under 1MB is best for speed).*

## Step 2: Update the List
1.  Open the file named `gallery-data.js`.
2.  You will see a list of images like this:
    ```javascript
    const galleryItems = [
        { src: 'images/gallery_portrait.png', category: 'Portrait', alt: 'Futuristic Portrait' },
        // ...
    ];
    ```
3.  Add a new line for your image inside the brackets `[]`.
    ```javascript
    { src: 'images/my-photo.jpg', category: 'Portrait', alt: 'My New Work' },
    ```

## Step 3: Save and Refresh
1.  Save the `gallery-data.js` file.
2.  Refresh your website browser. Your new image will appear instantly!

## Options
- **category**: Choose one of the existing categories (`Portrait`, `Landscape`, `Abstract`, `Fashion`, `Product`) or create a new one.
- **span**: If you want an image to be **extra large** (spanning 2 columns), add `span: true`:
    ```javascript
    { src: 'images/big-photo.jpg', category: 'Landscape', span: true },
    ```
