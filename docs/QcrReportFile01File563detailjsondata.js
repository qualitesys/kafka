console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java 29 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "BaseRecords"
 , "c2" : "org.apache.kafka.common.record.LazyDownConversionRecords"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.LazyDownConversionRecords" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#51"
 , "c1" : "LazyDownConversionRecords"
 , "c2" : "LazyDownConversionRecords(TopicPartition;Records;byte;long;Time)"
 , "c3" : "3"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#76"
 , "c1" : "int"
 , "c2" : "sizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#81"
 , "c1" : "LazyDownConversionRecordsSend"
 , "c2" : "toSend()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#85"
 , "c1" : "TopicPartition"
 , "c2" : "topicPartition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00090"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#90"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00102"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#102"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#111"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#119"
 , "c1" : "java.util.Iterator&lt;ConvertedRecords&lt;?&gt;&gt;"
 , "c2" : "iterator(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "20"
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
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument records is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.record.LazyDownConversionRecords.LazyDownConversionRecords@POLYN176538 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.record.LazyDownConversionRecords.LazyDownConversionRecords@POLYN176538 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.record.LazyDownConversionRecords.LazyDownConversionRecords@POLYN176538 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.common.record.LazyDownConversionRecords.equals@POLYN178188 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.common.record.LazyDownConversionRecords.hashCode@POLYN178709 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.common.record.LazyDownConversionRecords.hashCode@POLYN178709 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.common.record.LazyDownConversionRecords.hashCode@POLYN178709 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.record.LazyDownConversionRecords.toString@POLYN179245 the MagicNumber/String  'LazyDownConversionRecords(size=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.record.LazyDownConversionRecords.toString@POLYN179245 the MagicNumber/String  ', underlying=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.common.record.LazyDownConversionRecords.toString@POLYN179245 the MagicNumber/String  ', toMagic=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.record.LazyDownConversionRecords.toString@POLYN179245 the MagicNumber/String  ', firstOffset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.record.LazyDownConversionRecords.toString@POLYN179245 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#119"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00119] For method iterator arguments long  maximumReadSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.common.record.LazyDownConversionRecords.iterator@POLYN179569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#143"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00143] The argument recordsToDownConvert is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.Iterator@POLYN180506 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00157] For method makeNext list of called methods Object monObjet|int currentBatch_sizeInBytesN182040"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00166] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00179] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00173] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.record.LazyDownConversionRecords.Iterator.makeNext@POLYN181056 the MagicNumber/String  0 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/LazyDownConversionRecords.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
