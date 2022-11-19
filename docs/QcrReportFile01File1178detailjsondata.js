console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java 43 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "CloseableOffsetStorageReader"
 , "c2" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#32"
 , "c1" : "OffsetStorageReaderImpl"
 , "c2" : "OffsetStorageReaderImpl(OffsetBackingStore;String;Converter;Converter)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#126"
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
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00022"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00022] The class OffsetStorageReaderImpl contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.OffsetStorageReaderImpl@POLYN163317 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#49"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00049] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#70"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00070] Lock statement on synchronized resource"
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
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00108] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00109] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00110] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00114] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'CRITICAL: Failed to serialize partition key when getting offsets for task with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'namespace {}. No value for this data will be returned, which may break the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'task or cause it to skip some data.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Offset reader is closed. This is likely because the task has already been ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'scheduled to stop but has taken longer than the graceful shutdown ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'period to do so.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Offset reader closed while attempting to read offsets. This is likely because ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'the task was been scheduled to stop but has taken longer than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'graceful shutdown period to do so.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Failed to fetch offsets from namespace {}: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Failed to fetch offsets.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'Should be able to map {} back to a requested partition-offset key, backing ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'store may have returned invalid data' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'CRITICAL: Failed to deserialize offset data when getting offsets for task with' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  ' namespace {}. No value for this data will be returned, which may break the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'task or cause it to skip some data. This could either be due to an error in ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl the MagicNumber/String  'the connector implementation or incompatible schema.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#128"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00128] Lock statement on synchronized resource"
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
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String  'Failed to cancel offset read future' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.html#133"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00133] In the recursive method org.apache.kafka.connect.storage.OffsetStorageReaderImpl.close@POLYN168545 the MagicNumber/String 'Failed to cancel offset read future' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageReaderImpl.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
