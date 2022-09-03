console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java 10 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RawSnapshotReader"
 , "c2" : "org.apache.kafka.snapshot.FileRawSnapshotReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.FileRawSnapshotReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "FileRawSnapshotReader"
 , "c2" : "FileRawSnapshotReader(FileRecords;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "OffsetAndEpoch"
 , "c2" : "snapshotId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "UnalignedRecords"
 , "c2" : "slice(long;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Records"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
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
 , "c1" : "00013"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class FileRawSnapshotReader contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method slice arguments long  position|int  size"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.snapshot.FileRawSnapshotReader.close@POLYN149748 the MagicNumber/String  'Unable to close snapshot reader %s at %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method open arguments Path  logDir|OffsetAndEpoch  snapshotId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method open list of called methods Object monObjet|java.nio.file.Path Snapshots_snapshotPathN150367"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN150216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN150216 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN150216 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN150216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/FileRawSnapshotReader.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.snapshot.FileRawSnapshotReader.open@POLYN150216 the MagicNumber/String  'Unable to Opens a snapshot file %s' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
