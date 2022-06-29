console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java 49 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.ByteBufferUnmapper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.ByteBufferUnmapper" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ByteBufferUnmapper"
 , "c2" : "ByteBufferUnmapper()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "unmap(String;ByteBuffer)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "MethodHandle"
 , "c2" : "lookupUnmapMethodHandle()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "MethodHandle"
 , "c2" : "unmapJava7Or8(MethodHandles.Lookup)"
 , "c3" : "1"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "MethodHandle"
 , "c2" : "unmapJava9(MethodHandles.Lookup)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "nonNull(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.svg" }

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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
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
 , "c4" : "18"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
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
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00020] The class ByteBufferUnmapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method unmap arguments String  resourceDescription|ByteBuffer  buffer"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String  'Unmapping only works with direct buffers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String  'Unable to unmap the mapped buffer: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00061] For method lookupUnmapMethodHandle list of called methods Object monObjet|java.lang.invoke.MethodHandle lookupN180501"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN180413 the MagicNumber/String  'Unmapping is not supported on this platform, because internal ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN180413 the MagicNumber/String  'Java APIs are not compatible with this Kafka version' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method unmapJava7Or8 arguments MethodHandles.Lookup  lookup"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00074] For method unmapJava7Or8 list of called methods Object monObjet|java.lang.invoke.MethodHandle dropArgumentsN182304|java.lang.invoke.MethodHandle filterReturnValueN182575"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#74"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00074] The argument lookup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  'java.nio.DirectByteBuffer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  'cleaner' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  'clean' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  'nonNull' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method unmapJava9 arguments MethodHandles.Lookup  lookup"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#90"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00090] The argument lookup is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String  'sun.misc.Unsafe' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String  'invokeCleaner' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String  'theUnsafe' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00100] For method nonNull arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.common.utils.ByteBufferUnmapper.nonNull@POLYN183635 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN180413"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#69"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00069] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN180413 the MagicNumber/String 'Unmapping is not supported on this platform, because internal ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#70"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00070] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.lookupUnmapMethodHandle@POLYN180413 the MagicNumber/String 'Java APIs are not compatible with this Kafka version' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String 'Unmapping only works with direct buffers' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmap@POLYN179817 the MagicNumber/String 'Unable to unmap the mapped buffer: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String 'java.nio.DirectByteBuffer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#77"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00077] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String 'cleaner' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#78"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00078] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String 'clean' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String 'nonNull' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#84"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00084] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava7Or8@POLYN180921 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00091] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String 'sun.misc.Unsafe' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#92"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00092] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String 'invokeCleaner' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#94"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00094] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String 'theUnsafe' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#95"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00095] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/ByteBufferUnmapper.java.html#96"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00096] In the recursive method org.apache.kafka.common.utils.ByteBufferUnmapper.unmapJava9@POLYN182880 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
