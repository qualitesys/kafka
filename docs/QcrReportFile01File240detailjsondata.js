console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java 102 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.ProducerBatch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.ProducerBatch" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ProducerBatch"
 , "c2" : "ProducerBatch(TopicPartition;MemoryRecordsBuilder;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ProducerBatch"
 , "c2" : "ProducerBatch(TopicPartition;MemoryRecordsBuilder;long;boolean)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "FutureRecordMetadata"
 , "c2" : "tryAppend(long;byte[];byte[];Header[];Callback;long)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "tryAppendForSplit(long;ByteBuffer;ByteBuffer;Header[];Thunk)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abort(RuntimeException)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isDone()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "complete(long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "completeExceptionally(RuntimeException;Function<Integer,RuntimeException>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "done(long;long;RuntimeException;Function<Integer,RuntimeException>)"
 , "c3" : "8"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeFutureAndFireCallbacks(long;long;Function<Integer,RuntimeException>)"
 , "c3" : "5"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "Deque<ProducerBatch>"
 , "c2" : "split(int)"
 , "c3" : "10"
 , "c4" : "25"
}} 
,
{ "ligne" : {
   "c1" : "ProducerBatch"
 , "c2" : "createBatchOffAccumulatorForRecord(Record;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isCompressed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasReachedDeliveryTimeout(long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FinalState"
 , "c2" : "finalState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "attempts()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "reenqueued(long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "queueTimeMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "waitedTimeMs(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "drained(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isSplitBatch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "inRetry()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "MemoryRecords"
 , "c2" : "records()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "estimatedSizeInBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "double"
 , "c2" : "compressionRatio()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFull()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setProducerState(ProducerIdAndEpoch;int;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetProducerState(ProducerIdAndEpoch;int;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeForRecordAppends()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "abortRecordAppends()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isClosed()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "buffer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "initialCapacity()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isWritable()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte"
 , "c2" : "magic()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "producerId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "producerEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "baseSequence()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "lastSequence()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasSequence()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isTransactional()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "sequenceHasBeenReset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
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
 , "c4" : "53"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "15"
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
   "c1" : "00039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00039] The class ProducerBatch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.clients.producer.internals.ProducerBatch.ProducerBatch@POLYN245850 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument recordsBuilder is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.clients.producer.internals.ProducerBatch.ProducerBatch@POLYN246085 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method tryAppend arguments long  timestamp|byte[]  key|byte[]  value|Header[]  headers|Callback  callback|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppend@POLYN247144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppend@POLYN247144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppend@POLYN247144 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppend@POLYN247144 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppend@POLYN247144 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method tryAppendForSplit arguments long  timestamp|ByteBuffer  key|ByteBuffer  value|Header[]  headers|Thunk  thunk"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument thunk is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.clients.producer.internals.ProducerBatch.tryAppendForSplit@POLYN248840 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method abort arguments RuntimeException  exception"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String  'Batch has already been completed in final state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String  'Aborting batch for partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.producer.internals.ProducerBatch.isDone@POLYN251137 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method complete arguments long  baseOffset|long  logAppendTime"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.producer.internals.ProducerBatch.complete@POLYN251471 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.clients.producer.internals.ProducerBatch.complete@POLYN251471 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#145"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00145] For method completeExceptionally arguments RuntimeException  topLevelException|Function&lt;Integer ,RuntimeException &gt;  recordExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#155"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00155] For method done arguments long  baseOffset|long  logAppendTime|RuntimeException  topLevelException|Function&lt;Integer ,RuntimeException &gt;  recordExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  'Successfully produced messages to {} with base offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  'Failed to produce messages to {} with base offset {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  'ProduceResponse returned {} for {} after batch with base offset {} had already been {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  'Ignored state transition {} -&amp;gt; {} for {} batch with base offset {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  'A ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  ' batch must not attempt another state change to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#190"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00190] For method completeFutureAndFireCallbacks arguments long  baseOffset|long  logAppendTime|Function&lt;Integer ,RuntimeException &gt;  recordExceptions"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00201] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00204] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00207] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00211] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.clients.producer.internals.ProducerBatch.completeFutureAndFireCallbacks@POLYN254991 the MagicNumber/String  'Error executing user-provided callback on message for topic-partition '{}'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00219] For method split arguments int  splitBatchSize"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#219"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00219] For method split list of called methods Object monObjet|org.apache.kafka.common.record.MemoryRecords recordsBuilder_buildN256564|Iterable&lt;org.apache.kafka.common.record.MutableRecordBatch&gt; memoryRecords_batchesN256660|org.apache.kafka.clients.producer.internals.ProducerBatch createBatchOffAccumulatorForRecordN257729|org.apache.kafka.clients.producer.internals.ProducerBatch createBatchOffAccumulatorForRecordN258224|int baseSequenceN259057"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00242] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00225"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  'Cannot split an empty producer batch.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  'Batch splitting cannot be used with non-compressed messages ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  'with version v0 and v1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  'A producer batch should only have one record batch.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00243] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.clients.producer.internals.ProducerBatch.split@POLYN256362 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#275"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00275] For method createBatchOffAccumulatorForRecord arguments Record  record|int  batchSize"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#275"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00275] For method createBatchOffAccumulatorForRecord list of called methods Object monObjet|org.apache.kafka.common.record.MemoryRecordsBuilder MemoryRecords_builderN260094"
}} 
,
{ "ligne" : {
   "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#275"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00275] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.clients.producer.internals.ProducerBatch.createBatchOffAccumulatorForRecord@POLYN259543 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.clients.producer.internals.ProducerBatch.createBatchOffAccumulatorForRecord@POLYN259543 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00293"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#293"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00293] The class Thunk contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.clients.producer.internals.ProducerBatch.toString@POLYN260984 the MagicNumber/String  'ProducerBatch(topicPartition=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.clients.producer.internals.ProducerBatch.toString@POLYN260984 the MagicNumber/String  ', recordCount=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00305"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#305"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00305] In method org.apache.kafka.clients.producer.internals.ProducerBatch.toString@POLYN260984 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#308"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00308] For method hasReachedDeliveryTimeout arguments long  deliveryTimeoutMs|long  now"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#320"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00320] For method reenqueued arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00324"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#324"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00324] In method org.apache.kafka.clients.producer.internals.ProducerBatch.reenqueued@POLYN261550 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#331"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00331] For method waitedTimeMs arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00332] In method org.apache.kafka.clients.producer.internals.ProducerBatch.waitedTimeMs@POLYN262057 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method drained arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#364"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00364] For method setProducerState arguments ProducerIdAndEpoch  producerIdAndEpoch|int  baseSequence|boolean  isTransactional"
}} 
,
{ "ligne" : {
   "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#364"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00364] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#368"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00368] For method resetProducerState arguments ProducerIdAndEpoch  producerIdAndEpoch|int  baseSequence|boolean  isTransactional"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#368"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00368] The argument producerIdAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00369"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#369"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00369] In method org.apache.kafka.clients.producer.internals.ProducerBatch.resetProducerState@POLYN263345 the MagicNumber/String  'Resetting sequence number of batch with current sequence {} for partition {} to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00371"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#371"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00371] In method org.apache.kafka.clients.producer.internals.ProducerBatch.resetProducerState@POLYN263345 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.clients.producer.internals.ProducerBatch.close@POLYN264046 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00428"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.clients.producer.internals.ProducerBatch.lastSequence@POLYN265754 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00135] Public method isDone is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#140"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00140] Public method complete is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00145] Public method completeExceptionally is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#312"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00312] Public method finalState is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#431"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00431] Public method hasSequence is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String 'Successfully produced messages to {} with base offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#165"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00165] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String 'Failed to produce messages to {} with base offset {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00170] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String 'ProduceResponse returned {} for {} after batch with base offset {} had already been {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String 'Ignored state transition {} -&amp;gt; {} for {} batch with base offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String ' batch must not attempt another state change to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#185"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00185] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String 'A ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#187"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00187] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.done@POLYN253202 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#127"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00127] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00128] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String 'Batch has already been completed in final state ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/ProducerBatch.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.clients.producer.internals.ProducerBatch.abort@POLYN250452 the MagicNumber/String 'Aborting batch for partition {}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
