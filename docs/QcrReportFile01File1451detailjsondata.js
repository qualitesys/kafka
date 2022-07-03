console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html" 
 , "texte" : "File server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java 23 rule violations " 
 , "fic2"  : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.server.common.CheckpointFile"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.common.CheckpointFile" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CheckpointFile"
 , "c2" : "CheckpointFile(File;int;EntryFormatter<T>)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(Collection<T>)"
 , "c3" : "2"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "List<T>"
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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class CheckpointFile contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument file is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00040] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.server.common.CheckpointFile.CheckpointFile@POLYN188906 the MagicNumber/String  '.tmp' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#47"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00047] For method write arguments Collection&lt;T &gt;  entries"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#47"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00047] The argument entries is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#48"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00048] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#75"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00075] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00083] The class CheckpointReadBuffer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  'Unrecognised version:' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  ', expected version: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  ' in checkpoint file at: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  'Expected [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  '] entries in checkpoint file [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  '], but found only [' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.read@POLYN192001 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method toInt arguments String  line"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method buildMalformedLineException arguments String  line"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/server-common/src/main/java/org/apache/kafka/server/common/CheckpointFile.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.server.common.CheckpointFile.CheckpointReadBuffer.buildMalformedLineException@POLYN194236 the MagicNumber/String  'Malformed line in checkpoint file [%s]: %s' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
