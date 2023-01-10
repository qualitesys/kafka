console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java 46 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "LogInputStream<FileLogInputStream.FileChannelRecordBatch>"
 , "c2" : "org.apache.kafka.common.record.FileLogInputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.record.FileLogInputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#54"
 , "c1" : "FileLogInputStream"
 , "c2" : "FileLogInputStream(FileRecords;int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#63"
 , "c1" : "FileChannelRecordBatch"
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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method nextBatch list of called methods Object monObjet|java.nio.channels.FileChannel fileRecords_channelN176066|java.lang.Long logHeaderBuffer_getLongN176497|V logHeaderBuffer_getN177114|int batch_sizeInBytesN177666"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN175979 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN175979 the MagicNumber/String  'log header' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN175979 the MagicNumber/String  'Found record size %d smaller than minimum record ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN175979 the MagicNumber/String  'overhead (%d) in file %s.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.record.FileLogInputStream.nextBatch@POLYN175979 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method streamingIterator arguments BufferSupplier  bufferSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method writeTo arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00177] For method writeTo list of called methods Object monObjet|java.nio.channels.FileChannel fileRecords_channelN180292"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#177"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00177] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN180199 the MagicNumber/String  'Failed to read record batch at position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN180199 the MagicNumber/String  ' from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method toMemoryRecordBatch arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00193] For method loadFullBatch list of called methods Object monObjet|org.apache.kafka.common.record.RecordBatch loadBatchWithSizeN181285"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181082 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181082 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181082 the MagicNumber/String  'full record batch' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00201] For method loadBatchHeader list of called methods Object monObjet|org.apache.kafka.common.record.RecordBatch loadBatchWithSizeN181644"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN181421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN181421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN181421 the MagicNumber/String  'record batch header' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method loadBatchWithSize arguments int  size|String  description"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00211] For method loadBatchWithSize list of called methods Object monObjet|java.nio.channels.FileChannel fileRecords_channelN181899"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN181777 the MagicNumber/String  'Failed to load record batch at position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN181777 the MagicNumber/String  ' from ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#224"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00224] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00227] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.equals@POLYN182544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00242] For method hashCode list of called methods Object monObjet|int Long_hashCodeN183741"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.hashCode@POLYN183521 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN184272 the MagicNumber/String  'FileChannelRecordBatch(magic: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN184272 the MagicNumber/String  ', offset: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN184272 the MagicNumber/String  ', size: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toString@POLYN184272 the MagicNumber/String  ')' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/record/FileLogInputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
