console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java 21 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.common.CheckpointFile"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.CheckpointFile" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#60"
 , "c1" : "CheckpointFile"
 , "c2" : "CheckpointFile(File;int;EntryFormatter&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#75"
 , "c1" : "void"
 , "c2" : "write(Collection&lt;T&gt;)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#102"
 , "c1" : "List&lt;T&gt;"
 , "c2" : "read()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.png" 

 , "ligneplantuml" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00068] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.server.common.CheckpointFile.CheckpointFile@POLYN169332 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method write arguments Collection&lt;T &gt;  entries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#75"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00075] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#76"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00076] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#103"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00103] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00147] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  'Unrecognised version:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  ', expected version: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  ' in checkpoint file at: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  'Expected [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  '] entries in checkpoint file [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  '], but found only [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN172427 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method toInt arguments String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#171"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00171] For method buildMalformedLineException arguments String  line"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.buildMalformedLineException@POLYN174662 the MagicNumber/String  'Malformed line in checkpoint file [%s]: %s' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
