$(function(){
    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                close();
            });
        }
    });

    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
            var notifOptions = {
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Limit reached',
                message: "Uh oh! Looks like you've reached your limit!"
            };
            chrome.notifications.create('limitNotif', notifOptions);
        });
    })
});