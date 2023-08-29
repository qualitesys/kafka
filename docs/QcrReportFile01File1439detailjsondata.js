console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "RawSnapshotReader,AutoCloseable"
 , "c2" : "org.apache.kafka.snapshot.FileRawSnapshotReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.FileRawSnapshotReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#32"
 , "c1" : "FileRawSnapshotReader"
 , "c2" : "FileRawSnapshotReader(FileRecords;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00038"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#38"
 , "c1" : "OffsetAndEpoch"
 , "c2" : "snapshotId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#43"
 , "c1" : "long"
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#48"
 , "c1" : "UnalignedRecords"
 , "c2" : "slice(long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#53"
 , "c1" : "Records"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#58"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#75"
 , "c1" : "FileRawSnapshotReader"
 , "c2" : "open(Path;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method slice arguments long  position|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.snapshot.FileRawSnapshotReader.close@POLYN161324 the MagicNumber/String  'Unable to close snapshot reader %s at %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method open arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00075] For method open list of called methods Object monObjet|java.nio.file.Path Snapshots_snapshotPathN161947"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN161792 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN161792 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN161792 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN161792 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN161792 the MagicNumber/String  'Unable to Opens a snapshot file %s' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
