var StoryTag = document.getElementById('storyTag');
var storyTitle = document.getElementById('storyTitle');
var newChapterNotification =document.getElementById('newChapterNotification');
var tagNotification = document.getElementById('tag-notification');
var titleNotification = document.getElementById('title-notification');

var postButton = document.getElementById('postButton');

var checkTag = function(){
	let titleValid = true;
	let tagValid = true;
	let tagValue = StoryTag.value;
	let tagCheck = tagValue.search(/([#])\w+/);
	let storyValue = storyTitle.value;
	let storyCheck = storyValue.search(/([a-z,A-Z])\w/);
	if(tagCheck == -1){
		StoryTag.className ="input is-large is-danger";
		tagNotification.style.display = ' block';
		postButton.disabled = true;
		tagValid = false;
	}else{
		StoryTag.className ="input is-large";
		tagNotification.style.display = ' none';
		postButton.disabled = false;
		tagValid =true;
	}
	if(storyCheck == -1){
		storyTitle.className ="input is-large is-danger";
		titleNotification.style.display = ' block';
		postButton.disabled = true;
		titleValid = false;
	}else{
		storyTitle.className ="input is-large";
		titleNotification.style.display = 'none';
		postButton.disabled = false;
		titleValid = true;
	}
	if(titleValid == true && tagValid == true){
		newChapterNotification.style.display = 'none';
	}else{
		newChapterNotification.style.display = 'block';
	}
};

var checkTitle = () =>{

}

StoryTag.addEventListener("change" , checkTag);
storyTitle.addEventListener("change", checkTag);

