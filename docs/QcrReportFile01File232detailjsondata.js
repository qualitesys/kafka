console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java 47 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.BufferPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.BufferPool" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BufferPool"
 , "c2" : "BufferPool(long;int;Metrics;Time;String)"
 , "c3" : "1"
 , "c4" : "19"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "allocate(int;long)"
 , "c3" : "14"
 , "c4" : "37"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "recordWaitTime(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "safeAllocateByteBuffer(int)"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "allocateByteBuffer(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "freeUp(int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deallocate(ByteBuffer;int)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "deallocate(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "availableMemory()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "freeSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "unallocatedMemory()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "queued()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "poolableSize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "totalMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Deque<Condition>"
 , "c2" : "waiters()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c4" : "36"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class BufferPool contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#38"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00038] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'bufferpool-wait-ratio' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'The fraction of time an appender waits for space allocation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'bufferpool-wait-time-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  '*Deprecated* The total time an appender waits for space allocation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'bufferpool-wait-time-ns-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'The total time in nanoseconds an appender waits for space allocation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'buffer-exhausted-records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'buffer-exhausted-rate' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'The average per-second number of record sends that are dropped due to buffer exhaustion' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'buffer-exhausted-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  'The total number of record sends that are dropped due to buffer exhaustion' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.producer.internals.BufferPool.BufferPool@POLYN207570 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method allocate arguments int  size|long  maxTimeToBlockMs"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  'Attempt to allocate ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' bytes, but there is a hard limit of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' on memory allocations.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  'Producer closed while allocating memory' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  'Producer closed while allocating memory' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  'buffer-exhausted-records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  'Failed to allocate ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' bytes within the configured max blocking time ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' ms. Total memory: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' bytes. Available memory: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' bytes. Poolable size: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  ' bytes' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.clients.producer.internals.BufferPool.allocate@POLYN210126 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method recordWaitTime arguments long  timeNs"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method safeAllocateByteBuffer arguments int  size"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.clients.producer.internals.BufferPool.safeAllocateByteBuffer@POLYN214814 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.producer.internals.BufferPool.safeAllocateByteBuffer@POLYN214814 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method allocateByteBuffer arguments int  size"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#203"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00203] For method freeUp arguments int  size"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method deallocate arguments ByteBuffer  buffer|int  size"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.clients.producer.internals.BufferPool.deallocate@POLYN216392 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#226"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00226] For method deallocate arguments ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.clients.producer.internals.BufferPool.deallocate@POLYN217179 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.clients.producer.internals.BufferPool.close@POLYN219010 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BufferPool.java.html#226"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00226] Public method deallocate is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
