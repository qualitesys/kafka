console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java 9 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "LogInputStream<MutableRecordBatch>"
 , "c2" : "org.apache.kafka.common.record.ByteBufferLogInputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.ByteBufferLogInputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#36"
 , "c1" : "ByteBufferLogInputStream"
 , "c2" : "ByteBufferLogInputStream(ByteBuffer;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#41"
 , "c1" : "MutableRecordBatch"
 , "c2" : "nextBatch()"
 , "c3" : "4"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#66"
 , "c1" : "Integer"
 , "c2" : "nextBatchSize()"
 , "c3" : "6"
 , "c4" : "9"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.svg" }

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
 , "c4" : "8"
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
 , "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00041] For method nextBatch list of called methods Object monObjet|java.lang.Integer nextBatchSizeN161715"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatch@POLYN161561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatch@POLYN161561 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  'Record size %d is less than the minimum record overhead (%d)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  'Record size %d exceeds the largest allowable message size (%d).' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.record.ByteBufferLogInputStream.nextBatchSize@POLYN162664 the MagicNumber/String  'Invalid magic found in record: ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/ByteBufferLogInputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
