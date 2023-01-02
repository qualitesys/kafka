console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java 17 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.record.RecordsUtil"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.RecordsUtil" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#42"
 , "c1" : "ConvertedRecords<MemoryRecords>"
 , "c2" : "downConvert(Iterable<?extendsRecordBatch>;byte;long;Time)"
 , "c3" : "15"
 , "c4" : "28"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#108"
 , "c1" : "MemoryRecordsBuilder"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method downConvert arguments Iterable&lt;?  extends RecordBatch &gt;  batches|byte  toMagic|long  firstOffset|Time  time"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00042] For method downConvert list of called methods Object monObjet|long time_nanosecondsN165043|int batch_sizeInBytesN165613|long batch_baseOffsetN166524|V records_getN166599|int AbstractRecords_estimateSizeInBytesN166714|int recordBatchAndRecords_batch_sizeInBytesN167334|org.apache.kafka.common.record.MemoryRecordsBuilder convertRecordBatchN167799|java.nio.ByteBuffer builder_bufferN167928|int builder_uncompressedBytesWrittenN168002|int builder_numRecordsN168076"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00064] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00091] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  'Down-conversion of zstandard-compressed batches ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  'is not supported' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.RecordsUtil.downConvert@POLYN164682 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method convertRecordBatch arguments byte  magic|ByteBuffer  buffer|RecordBatchAndRecords  recordBatchAndRecords"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00108] For method convertRecordBatch list of called methods Object monObjet|org.apache.kafka.common.record.TimestampType batch_timestampTypeN168850|org.apache.kafka.common.record.MemoryRecordsBuilder MemoryRecords_builderN169082"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.html#108"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00108] The argument recordBatchAndRecords is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/RecordsUtil.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
