console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java 19 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.RecordsUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.RecordsUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConvertedRecords<MemoryRecords>"
 , "c2" : "downConvert(Iterable<?extendsRecordBatch>;byte;long;Time)"
 , "c3" : "15"
 , "c4" : "28"
}} 
,
{ "ligne" : {
   "c1" : "MemoryRecordsBuilder"
 , "c2" : "convertRecordBatch(byte;ByteBuffer;RecordBatchAndRecords)"
 , "c3" : "4"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.svg" }

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
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class RecordsUtil contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method downConvert arguments Iterable&lt;?  extends RecordBatch &gt;  batches|byte  toMagic|long  firstOffset|Time  time"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00014] For method downConvert list of called methods Object monObjet|long time_nanosecondsN182409|int batch_sizeInBytesN182979|long batch_baseOffsetN183890|int AbstractRecords_estimateSizeInBytesN184080|java.nio.ByteBuffer Utils_ensureCapacityN184881|org.apache.kafka.common.record.MemoryRecordsBuilder convertRecordBatchN185165|java.nio.ByteBuffer builder_bufferN185294|int builder_uncompressedBytesWrittenN185368|int builder_numRecordsN185442"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#15"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00015] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00035] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00036] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00018] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  'Down-conversion of zstandard-compressed batches ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  'is not supported' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN182048 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00077] For method convertRecordBatch arguments byte  magic|ByteBuffer  buffer|RecordBatchAndRecords  recordBatchAndRecords"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#77"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00077] For method convertRecordBatch list of called methods Object monObjet|org.apache.kafka.common.record.TimestampType batch_timestampTypeN186216|org.apache.kafka.common.record.MemoryRecordsBuilder MemoryRecords_builderN186448"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#77"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00077] The argument recordBatchAndRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00097] The class RecordBatchAndRecords contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
]
};
console.log('leListeStr 99 main end');
