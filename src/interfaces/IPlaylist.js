/**
 * Playlist interface that should be supported by different playleist formats
 * @class
 * @author Sergey Chikuyonok (serge.che@gmail.com)
 * @link http://chikuyonok.ru
 */function IPlaylist() {
	
}

IPlaylist.prototype = {
	/**
	 * List of playlist tracks organized by extension
	 */
	containers: {
		'mp3': {
			/** @type {IPlaylistItem[]} */
			tracks: [],
			type: 'mp3'
		}
	}
};

/**
 * Single item in playlist
 * @class
 */
function IPlaylistItem() {
	
}

IPlaylistItem.prototype = {
	/** URL of the track */
	location: '',
	
	/** Unique ID of the track */
	id: '',
	
	/** Track title */
	title: '',
	
	/** Track duration, in milliseconds */
	duration: 0,
	
	/** Explicit track number. May be <code>null</code> if not defined */
	trackNum: null,
	
	/** @type {IPlaylistItem} Previous track */
	prevTrack: null,
	
	/** @type {IPlaylistItem} Next track */
	nextTrack: null,
	
	/** @type {IPlaylist} Backreference to playlist */
	playlist: null
};