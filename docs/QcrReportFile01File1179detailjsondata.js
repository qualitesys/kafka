console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java 56 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.storage.OffsetStorageWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.OffsetStorageWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#79"
 , "c1" : "OffsetStorageWriter"
 , "c2" : "OffsetStorageWriter(OffsetBackingStore;String;Converter;Converter)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#93"
 , "c1" : "void"
 , "c2" : "offset(Map<String,?>;Map<String,?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#97"
 , "c1" : "boolean"
 , "c2" : "flushing()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#107"
 , "c1" : "boolean"
 , "c2" : "beginFlush()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#125"
 , "c1" : "boolean"
 , "c2" : "willFlush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00137"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#137"
 , "c1" : "Future<Void>"
 , "c2" : "doFlush(Callback<Void>)"
 , "c3" : "3"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00188"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#188"
 , "c1" : "void"
 , "c2" : "cancelFlush()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00204"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#204"
 , "c1" : "boolean"
 , "c2" : "handleFinishWrite(long;Throwable;Void)"
 , "c3" : "4"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "14"
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "25"
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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#93"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00093] Lock statement on synchronized method offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method offset arguments Map&lt;String ,? &gt;  partition|Map&lt;String ,? &gt;  offset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.storage.OffsetStorageWriter.flushing@POLYN179417 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#107"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00107] Lock statement on synchronized method beginFlush"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN179693 the MagicNumber/String  'Invalid call to OffsetStorageWriter flush() while already flushing, the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN179693 the MagicNumber/String  'framework should not allow this' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN179693 the MagicNumber/String  'OffsetStorageWriter is already flushing' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN179693 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.storage.OffsetStorageWriter.beginFlush@POLYN179693 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#125"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00125] Lock statement on synchronized method willFlush"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00137] For method doFlush arguments Callback&lt;Void &gt;  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00137] For method doFlush list of called methods Object monObjet|boolean handleFinishWriteN183111"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#143"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00143] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00157] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  'CRITICAL: Failed to serialize offset data, making it impossible to commit ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  'offsets under namespace {}. This likely won't recover unless the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  'unserializable partition or offset information is overwritten.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  'Cause of serialization failure:' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  'Submitting {} entries to backing store. The offsets are: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#188"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00188] Lock statement on synchronized method cancelFlush"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN183580 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#204"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00204] Lock statement on synchronized method handleFinishWrite"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#204"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00204] For method handleFinishWrite arguments long  flushId|Throwable  error|Void  result"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN184038 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00210"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#210"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00210] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN184038 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN184038 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.connect.storage.OffsetStorageWriter.handleFinishWrite@POLYN184038 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#107"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00107] Public method beginFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#125"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00125] Public method willFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#93"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00093] Public method offset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00188] Public method cancelFlush is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00156] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String 'CRITICAL: Failed to serialize offset data, making it impossible to commit ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#164"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00164] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String 'offsets under namespace {}. This likely won't recover unless the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00165] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String 'unserializable partition or offset information is overwritten.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#166"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00166] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String 'Cause of serialization failure:' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String 'Submitting {} entries to backing store. The offsets are: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.connect.storage.OffsetStorageWriter.doFlush@POLYN180716 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/storage/OffsetStorageWriter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
