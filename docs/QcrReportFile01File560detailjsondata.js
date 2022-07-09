console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java 42 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "LogInputStream<FileLogInputStream.FileChannelRecordBatch>"
 , "c2" : "org.apache.kafka.common.record.FileLogInputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.FileLogInputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "FileLogInputStream"
 , "c2" : "FileLogInputStream(FileRecords;int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "FileChannelRecordBatch"
 , "c2" : "nextBatch()"
 , "c3" : "6"
 , "c4" : "15"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00025] The class FileLogInputStream contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00041] For method nextBatch list of called methods Object monObjet|java.nio.channels.FileChannel fileRecords_channelN174630"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN174543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN174543 the MagicNumber/String  'log header' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN174543 the MagicNumber/String  'Found record size %d smaller than minimum record ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN174543 the MagicNumber/String  'overhead (%d) in file %s.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN174543 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#131"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00131] For method streamingIterator arguments BufferSupplier  bufferSupplier"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method writeTo arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#151"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00151] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN178763 the MagicNumber/String  'Failed to read record batch at position ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN178763 the MagicNumber/String  ' from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#163"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00163] For method toMemoryRecordBatch arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN179646 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN179646 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN179646 the MagicNumber/String  'full record batch' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN179985 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN179985 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN179985 the MagicNumber/String  'record batch header' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method loadBatchWithSize arguments int  size|String  description"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN180341 the MagicNumber/String  'Failed to load record batch at position ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN180341 the MagicNumber/String  ' from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00201] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN181108 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00217"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00220"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN182085 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN182836 the MagicNumber/String  'FileChannelRecordBatch(magic: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN182836 the MagicNumber/String  ', offset: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN182836 the MagicNumber/String  ', size: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN182836 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
