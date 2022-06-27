console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java 14 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "BufferConfigInternal<Suppressed.EagerBufferConfig>Suppressed.EagerBufferConfig"
 , "c2" : "org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "EagerBufferConfigImpl"
 , "c2" : "EagerBufferConfigImpl(long;long;Map<String,String>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Suppressed.EagerBufferConfig"
 , "c2" : "withMaxRecords(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Suppressed.EagerBufferConfig"
 , "c2" : "withMaxBytes(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maxRecords()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "maxBytes()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "BufferFullStrategy"
 , "c2" : "bufferFullStrategy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Suppressed.EagerBufferConfig"
 , "c2" : "withLoggingDisabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Suppressed.EagerBufferConfig"
 , "c2" : "withLoggingEnabled(Map<String,String>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isLoggingEnabled()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,String>"
 , "c2" : "getLogConfig()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
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
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#25"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00025] For method withMaxRecords arguments long  recordLimit"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method withMaxBytes arguments long  byteLimit"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.withLoggingDisabled@POLYN167955 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method withLoggingEnabled arguments Map&lt;String ,String &gt;  config"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.isLoggingEnabled@POLYN168391 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00074] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.equals@POLYN168728 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.equals@POLYN168728 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.equals@POLYN168728 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.toString@POLYN169618 the MagicNumber/String  'EagerBufferConfigImpl{maxRecords=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.toString@POLYN169618 the MagicNumber/String  ', maxBytes=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.toString@POLYN169618 the MagicNumber/String  ', logConfig=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/suppress/EagerBufferConfigImpl.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.streams.kstream.internals.suppress.EagerBufferConfigImpl.toString@POLYN169618 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
