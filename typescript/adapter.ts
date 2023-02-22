/**
 * @author
 * @file adapter.ts
 * @fileBase adapter
 * @path typescript\adapter.ts
 * @from 
 * @desc 已经实现了mp3 的播放,现在想要支持 mp4 和 vlc 等的播放
 * @todo

 *
 * @done
 * @example
 */

interface MediaPlayer {
  play(audioType: string, fileName: string): void;
}

interface AdvancedMediaPlayer {
  playVlc(fileName: string): void;
  playMp4(fileName: string): void;
}
class VlcPlayer implements AdvancedMediaPlayer {
  // override
  playVlc(fileName: string) {
    console.log(`vlc 播放 fileName`, fileName);
  }
  playMp4(fileName: string) {
    throw new Error("Method not implemented.");
  }
}
class Mp4Player implements AdvancedMediaPlayer {
  playVlc(fileName: string) {
    throw new Error("Method not implemented.");
  }
  playMp4(fileName: string) {
    console.log(`mp4 播放 fileName`, fileName);
  }
}
type AudioTypes = "vlc" | "mp4" | "mp3";
class MediaAdapter implements MediaPlayer {
  advancedMediaPlayer: AdvancedMediaPlayer;
  constructor(audioType: AudioTypes) {
    if (audioType === "vlc") {
      this.advancedMediaPlayer = new VlcPlayer();
    } else {
      this.advancedMediaPlayer = new Mp4Player();
    }
  }
  play(audioType: AudioTypes, fileName: string) {
    if (audioType === "vlc") {
      this.advancedMediaPlayer.playVlc(fileName);
    } else {
      this.advancedMediaPlayer.playMp4(fileName);
    }
  }
}
class AudioPlayer implements MediaPlayer {
  mediaAdapter: MediaAdapter | null = null;
  play(audioType: string, fileName: string) {
    if (audioType === "mp3") {
      console.log(`播放mp3 内部支持`, fileName);
    } else if (["vlc", "mp4"].includes(audioType)) {
      // 使用适配器
      this.mediaAdapter = new MediaAdapter(audioType as AudioTypes);
      this.mediaAdapter.play(audioType as AudioTypes, fileName);
    } else {
      throw new Error(`不支持这个格式`);
    }
  }
}
try {
  // 使用
  const audioPlayer = new AudioPlayer();
  audioPlayer.play("mp3", "xxx.mp3");
  audioPlayer.play("mp4", "xxx.mp4");
  audioPlayer.play("vlc", "xxx.vlc");
  audioPlayer.play("avi", "xxx.avi");
} catch (error) {
  console.log(`error`, error);
}
