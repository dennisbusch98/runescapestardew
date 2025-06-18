const Assets = {
    spritesheet : null, 
}

function loadAssets(callback) {
    let assetsToLoad = 1;
    let assetsLoaded = 0;

     function onAssetsLoaded() {
        assetsLoaded++;
        console.log(`assets loaded: ${assetsLoaded} of ${assetsToLoad}`);
        if (assetsLoaded === assetsToLoad) {
            console.log("All assets loaded, starting game");
            if (callback) {
                callback();
            }

        }
   
    }
 Assets.spritesheet = new Image();
 Assets.spritesheet.src = "assets/images/sprites.png";
 Assets.spritesheet.onload = onAssetsLoaded;
   
}




