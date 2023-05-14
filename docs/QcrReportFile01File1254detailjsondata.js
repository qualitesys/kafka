console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java 167 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "MessageClassGenerator"
 , "c2" : "org.apache.kafka.message.JsonConverterGenerator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.JsonConverterGenerator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#33"
 , "c1" : "JsonConverterGenerator"
 , "c2" : "JsonConverterGenerator(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#41"
 , "c1" : "String"
 , "c2" : "outputName(MessageSpec)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#46"
 , "c1" : "void"
 , "c2" : "generateAndWrite(MessageSpec;BufferedWriter)"
 , "c3" : "2"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#75"
 , "c1" : "void"
 , "c2" : "generateConverters(String;StructSpec;Versions)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00083"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#83"
 , "c1" : "void"
 , "c2" : "generateRead(String;StructSpec;Versions)"
 , "c3" : "2"
 , "c4" : "27"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00142"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#142"
 , "c1" : "void"
 , "c2" : "generateTargetFromJson(Target;Versions)"
 , "c3" : "19"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00215"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#215"
 , "c1" : "void"
 , "c2" : "generateVariableLengthTargetFromJson(Target;Versions)"
 , "c3" : "13"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#271"
 , "c1" : "void"
 , "c2" : "generateOverloadWrite(String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00280"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#280"
 , "c1" : "void"
 , "c2" : "generateWrite(String;StructSpec;Versions)"
 , "c3" : "5"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00339"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#339"
 , "c1" : "void"
 , "c2" : "generateTargetToJson(Target;Versions)"
 , "c3" : "13"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00386"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#386"
 , "c1" : "void"
 , "c2" : "generateVariableLengthTargetToJson(Target;Versions)"
 , "c3" : "13"
 , "c4" : "32"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "134"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method outputName arguments MessageSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method generateAndWrite arguments MessageSpec  message|BufferedWriter  writer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00046] For method generateAndWrite list of called methods Object monObjet|java.util.Iterator structRegistry_structsN231115"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument message is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  '%s.%s.*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  'public class %s {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  'public static class %s {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN230291 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method generateConverters arguments String  name|StructSpec  spec|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method generateRead arguments String  className|StructSpec  struct|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00083] For method generateRead list of called methods Object monObjet|org.apache.kafka.message.Versions parentVersions_intersectN233638|java.lang.String String_formatN233846|org.apache.kafka.message.Versions field_versionsN234268"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00101] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'public static %s read(JsonNode _node, short _version) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '%s _object = new %s();%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'throw new UnsupportedVersionException(\'Can't read ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'version \' + _version + \' of %s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '_%sNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'JsonNode %s = _node.get(\'%s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'if (%s == null) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'throw new RuntimeException(\'%s: unable to locate ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'field \'%s\', which is mandatory in version \' + _version);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '_object.%s = %s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '} else {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '_object.%s = %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'throw new RuntimeException(\'%s: field \'%s\' is not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'supported in version \' + _version);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  'return _object;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN232705 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method generateTargetFromJson arguments Target  target|Versions  curVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'if (!%s.isBoolean()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'throw new RuntimeException(\'%s expected Boolean type, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00149"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00149] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00150] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '.asBoolean()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToByte(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToShort(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToUnsignedShort(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToUnsignedInt(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00175"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToInt(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToLong(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'if (!%s.isTextual()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'throw new RuntimeException(\'%s expected a JSON string ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'type, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#188"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00188] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'Uuid.fromString(%s.asText())' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'MessageUtil.jsonNodeToDouble(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s%s.isNull()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN236223 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method generateVariableLengthTargetFromJson arguments Target  target|Versions  curVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00215] For method generateVariableLengthTargetFromJson list of called methods Object monObjet|org.apache.kafka.message.FieldSpec target_fieldN244847"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#215"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00215] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'if (!%s.isTextual()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00219"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'throw new RuntimeException(\'%s expected a string ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'type, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00223"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s.asText()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'ByteBuffer.wrap(MessageUtil.jsonNodeToBinary(%s, \'%s\'))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00234"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#234"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00234] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'MessageUtil.jsonNodeToBinary(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00242"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#242"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00242] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'MemoryRecords.readableRecords(ByteBuffer.wrap(MessageUtil.jsonNodeToBinary(%s, \'%s\')))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00245"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'if (!%s.isArray()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'throw new RuntimeException(\'%s expected a JSON ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00248] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'array, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s _collection = new %s(%s.size());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00253"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00253] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '_collection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'for (JsonNode _element : %s) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '_collection.add(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  '%s%s.read(%s, _version)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN241931 the MagicNumber/String  'Unexpected type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00271] For method generateOverloadWrite arguments String  className"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00272"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN246419 the MagicNumber/String  'public static JsonNode write(%s _object, short _version) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN246419 the MagicNumber/String  'return write(_object, _version, true);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00277"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN246419 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method generateWrite arguments String  className|StructSpec  struct|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00280] For method generateWrite list of called methods Object monObjet|org.apache.kafka.message.Versions parentVersions_intersectN247643|org.apache.kafka.message.VersionConditional VersionConditional_forVersionsN248475"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#281"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00281] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00282"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#282"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00282] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00300"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00300] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00304"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00304] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'public static JsonNode write(%s _object, short _version, boolean _serializeRecords) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'throw new UnsupportedVersionException(\'Can't write ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'version \' + _version + \' of %s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'ObjectNode _node = new ObjectNode(JsonNodeFactory.instance);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00301"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '_object.%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '_node.set(\'%s\', %s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '_object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00329] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '_object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  'return _node;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN246827 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#339"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00339] For method generateTargetToJson arguments Target  target|Versions  versions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00339"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#339"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00339] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00344] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00349] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00354"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#354"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00354] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00342"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00343"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'BooleanNode.valueOf(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00347"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'new ShortNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00352"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00352] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00353] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'new IntNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00358"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00358] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'new LongNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00362"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00362] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'new TextNode(%s.toString())' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00366"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00366] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'new DoubleNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s %s= null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN250246 the MagicNumber/String  'NullNode.instance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00386] For method generateVariableLengthTargetToJson arguments Target  target|Versions  versions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#386"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00386] For method generateVariableLengthTargetToJson list of called methods Object monObjet|java.lang.String String_formatN257071"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#386"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00386] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00390] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'new TextNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00396"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00396] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'new BinaryNode(MessageUtil.byteBufferToArray(%s))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00400"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#400"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00400] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00401"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00401] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'new BinaryNode(Arrays.copyOf(%s, %s.length))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00410"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00410] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'if (_serializeRecords) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00412"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'new BinaryNode(new byte[]{})' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00414"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '} else {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00416"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '_node.set(\'%sSizeInBytes\', new IntNode(%s.sizeInBytes()));%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00426"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00426] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '_%sArray' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00428"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#428"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00428] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'ArrayNode %s = new ArrayNode(JsonNodeFactory.instance);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00430"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#430"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00430] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'for (%s _element : %s) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00434"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00434] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s.add(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00437"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#437"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00437] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00438"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00438] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00440"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#440"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00440] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  '%sJsonConverter.write(%s, _version, _serializeRecords)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN254136 the MagicNumber/String  'unknown type ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
