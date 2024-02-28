import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import FolderZipRoundedIcon from '@mui/icons-material/FolderZipRounded';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AudioFileRoundedIcon from '@mui/icons-material/AudioFileRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import DriveStyles from '@/styles/drive.module.css';

const movieType = ["mp4", "mov", "avi", "wmv", "flv", "mkv", "webm", "mpg", "mpeg", "m4v", "3gp", "3g2", "ogv", "ogg", "ogm", "ogx"];
const imageType = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "tiff", "tif", "svg", "ico", "jpe", "jfif", "jp2", "j2k", "jpf", "jpx", "jpm", "mj2", "heif", "heic", "avif"];
const audioType = ["mp3", "wav", "flac", "m4a", "wma", "aac", "ogg", "oga", "opus", "weba", "3gp", "3g2"];
const scriptType = ["c", "cpp", "cc", "cxx", "java", "py", "js", "ts", "tsx", "html", "css", "scss", "sass", "less", "rb", "go", "rs", "php", "sh", "bat", "ps1", "psm1", "psd1", "ps1xml", "pssc", "psc1", "psc2", "pl", "pm", "t", "r", "lua", "swift", "kt", "kts", "clj", "cljs", "cljc", "edn", "scala", "groovy", "dart", "cs", "fs", "fsx", "fsi", "fsscript", "fsharp", "f#", "vbs", "vba", "vbscript", "vb", "vb6", "vb.net", "cobol", "fortran", "pascal", "delphi", "objectpascal", "perl", "perl6", "raku", "rakudo", "cs", "xml", "yaml", "yml", "json", "toml", "ini", "cfg", "conf", "properties", "env", "envrc", "env.example", "env.local", "env.development", "env.test", "env.staging", "env.production", "env.local", "env.dev", "env.prod", "env.stg", "env.tst", "env.prd", "sql"];

const fileTypeChecker = (type, file_type) => {
  switch(type.toLowerCase()) {
    case "directory":
      if (file_type === "shortcut") {
        return <FolderSharedRoundedIcon fontSize='inherit' />;
      }
      return <FolderRoundedIcon fontSize='inherit' />;
    case "zip":
      return <FolderZipRoundedIcon fontSize='inherit' />;
    case "file":
      // 動画ファイル
      if (movieType.includes(file_type)) {
        return <MovieCreationRoundedIcon fontSize='inherit' />;
      }
      // 音楽ファイル
      else if (audioType.includes(file_type)) {
        return <AudioFileRoundedIcon fontSize='inherit' />;
      }
      // 画像ファイル
      else if (imageType.includes(file_type)) {
        return <ImageRoundedIcon fontSize='inherit' />;
      }
      // PDF
      else if (file_type === "pdf") {
        return <PictureAsPdfRoundedIcon fontSize='inherit' />;
      }
      // スクリプトファイル
      else if (scriptType.includes(file_type)) {
        return <CodeRoundedIcon fontSize='inherit' />;
      }
      return <ArticleRoundedIcon fontSize='inherit' />;
  }
}

const FileTypeIcon = ({
  type,
  file_type,
  width,
}) => {
  
  const [fileIcon, setFileIcon] = useState(null);

  useEffect(() => {
  }, [type]);
  
  return (
    <Box
      width={width}
      className={DriveStyles.ListViewDataFieldsIconBox}
      color="primary.dark"
    >
      {fileTypeChecker(type, file_type)}
    </Box>
  )
}

export default FileTypeIcon