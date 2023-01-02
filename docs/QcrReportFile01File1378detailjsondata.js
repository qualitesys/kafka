console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java 8 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AutoCloseable"
 , "c2" : "org.apache.kafka.metadata.util.SnapshotFileWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.util.SnapshotFileWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#46"
 , "c1" : "SnapshotFileWriter"
 , "c2" : "SnapshotFileWriter(FileChannel;BatchAccumulator<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#51"
 , "c1" : "void"
 , "c2" : "append(ApiMessageAndVersion)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#55"
 , "c1" : "void"
 , "c2" : "append(List<ApiMessageAndVersion>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#59"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#66"
 , "c1" : "SnapshotFileWriter"
 , "c2" : "open(Path)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method append arguments ApiMessageAndVersion  apiMessageAndVersion"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.metadata.util.SnapshotFileWriter.append@POLYN151759 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method append arguments List&lt;ApiMessageAndVersion &gt;  messageBatch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.metadata.util.SnapshotFileWriter.append@POLYN151956 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method open arguments Path  snapshotPath"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN152500 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN152500 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.metadata.util.SnapshotFileWriter.open@POLYN152500 the MagicNumber/String  5 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/util/SnapshotFileWriter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
