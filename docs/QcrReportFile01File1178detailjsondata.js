console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java 42 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "CloseableOffsetStorageReader"
 , "c2" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#51"
 , "c1" : "OffsetStorageReaderImpl"
 , "c2" : "OffsetStorageReaderImpl(OffsetBackingStore;String;Converter;Converter)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00145"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#145"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.svg" }

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
"data12a" : [
{ "ligne" :  "R0:org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures" }
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "26"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.OffsetStorageReaderImpl@POLYN173687 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00076] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00078] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#89"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00089] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#108"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00108] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00127] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00128] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00129] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'CRITICAL: Failed to serialize partition key when getting offsets for task with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'namespace {}. No value for this data will be returned, which may break the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'task or cause it to skip some data.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Offset reader is closed. This is likely because the task has already been ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'scheduled to stop but has taken longer than the graceful shutdown ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'period to do so.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Offset reader closed while attempting to read offsets. This is likely because ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'the task was been scheduled to stop but has taken longer than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'graceful shutdown period to do so.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Failed to fetch offsets from namespace {}: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Failed to fetch offsets.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Should be able to map {} back to a requested partition-offset key, backing ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'store may have returned invalid data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'CRITICAL: Failed to deserialize offset data when getting offsets for task with' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  ' namespace {}. No value for this data will be returned, which may break the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'task or cause it to skip some data. This could either be due to an error in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'the connector implementation or incompatible schema.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#147"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00147] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00151] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String  'Failed to cancel offset read future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00150] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN178933 the MagicNumber/String 'Failed to cancel offset read future' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
