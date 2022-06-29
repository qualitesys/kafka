console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java 61 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "MemoryPool"
 , "c2" : "org.apache.kafka.common.memory.SimpleMemoryPool"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.memory.SimpleMemoryPool" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SimpleMemoryPool"
 , "c2" : "SimpleMemoryPool(long;int;boolean;Sensor)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "tryAllocate(int)"
 , "c3" : "8"
 , "c4" : "14"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "release(ByteBuffer)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "size()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "availableMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOutOfMemory()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bufferToBeReturned(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "bufferToBeReleased(ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeRecordEndOfDrySpell()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "21"
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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
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
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class SimpleMemoryPool contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  'must provide a positive size and max single allocation size smaller than size.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  'provided ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  ' and ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String  ' respectively' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method tryAllocate arguments int  sizeBytes"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00048] Assigning instead of comparing on available=availableMemory.get() (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  'requested size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  '&amp;lt;=0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  'requested size ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  ' is larger than maxSingleAllocationSize ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  'refused to allocate buffer of size {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method release arguments ByteBuffer  previouslyAllocated"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.common.memory.SimpleMemoryPool.release@POLYN177169 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.memory.SimpleMemoryPool.release@POLYN177169 the MagicNumber/String  'provided null buffer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.memory.SimpleMemoryPool.isOutOfMemory@POLYN177803 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#95"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00095] For method bufferToBeReturned arguments ByteBuffer  justAllocated"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#95"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00095] The argument justAllocated is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.memory.SimpleMemoryPool.bufferToBeReturned@POLYN177925 the MagicNumber/String  'allocated buffer of size {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method bufferToBeReleased arguments ByteBuffer  justReleased"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#100"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00100] The argument justReleased is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.memory.SimpleMemoryPool.bufferToBeReleased@POLYN178103 the MagicNumber/String  'released buffer of size {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN178303 the MagicNumber/String  'SimpleMemoryPool{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN178303 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.memory.SimpleMemoryPool.toString@POLYN178303 the MagicNumber/String  ' used}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String  1000000.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#111"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00111] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00112] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#113"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00113] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#115"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00115] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.maybeRecordEndOfDrySpell@POLYN178650 the MagicNumber/String 1000000.0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#37"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00037] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String '&amp;lt;=0' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 'requested size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String ' is larger than maxSingleAllocationSize ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00040] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 'requested size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String 'refused to allocate buffer of size {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.tryAllocate@POLYN175578 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00026] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String 'must provide a positive size and max single allocation size smaller than size.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String ' and ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String ' respectively' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/memory/SimpleMemoryPool.java.html#27"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00027] In the recursive method org.apache.kafka.common.memory.SimpleMemoryPool.SimpleMemoryPool@POLYN174723 the MagicNumber/String 'provided ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
