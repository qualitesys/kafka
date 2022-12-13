console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java 165 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.xml" 
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
 , "c5" : "00016"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#16"
 , "c1" : "JsonConverterGenerator"
 , "c2" : "JsonConverterGenerator(String)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#24"
 , "c1" : "String"
 , "c2" : "outputName(MessageSpec)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#29"
 , "c1" : "void"
 , "c2" : "generateAndWrite(MessageSpec;BufferedWriter)"
 , "c3" : "2"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#58"
 , "c1" : "void"
 , "c2" : "generateConverters(String;StructSpec;Versions)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#66"
 , "c1" : "void"
 , "c2" : "generateRead(String;StructSpec;Versions)"
 , "c3" : "2"
 , "c4" : "27"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00125"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#125"
 , "c1" : "void"
 , "c2" : "generateTargetFromJson(Target;Versions)"
 , "c3" : "19"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00198"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#198"
 , "c1" : "void"
 , "c2" : "generateVariableLengthTargetFromJson(Target;Versions)"
 , "c3" : "13"
 , "c4" : "30"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00254"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#254"
 , "c1" : "void"
 , "c2" : "generateOverloadWrite(String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00263"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#263"
 , "c1" : "void"
 , "c2" : "generateWrite(String;StructSpec;Versions)"
 , "c3" : "5"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00322"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#322"
 , "c1" : "void"
 , "c2" : "generateTargetToJson(Target;Versions)"
 , "c3" : "13"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00369"
 , "c5link" : "././qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#369"
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
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.svg" }

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
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method outputName arguments MessageSpec  spec"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#24"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00024] The argument spec is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method generateAndWrite arguments MessageSpec  message|BufferedWriter  writer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#29"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00029] The argument message is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00041] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  '%s.%s.*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  'public class %s {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  '%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  'public static class %s {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228285 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method generateConverters arguments String  name|StructSpec  spec|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method generateRead arguments String  className|StructSpec  struct|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00066] For method generateRead list of called methods Object monObjet|java.lang.String String_formatN231840"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#67"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00067] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00090] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'public static %s read(JsonNode _node, short _version) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '%s _object = new %s();%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'throw new UnsupportedVersionException(\'Can't read ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'version \' + _version + \' of %s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '_%sNode' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'JsonNode %s = _node.get(\'%s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'if (%s == null) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'throw new RuntimeException(\'%s: unable to locate ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'field \'%s\', which is mandatory in version \' + _version);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '_object.%s = %s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '} else {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '_object.%s = %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'throw new RuntimeException(\'%s: field \'%s\' is not ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'supported in version \' + _version);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  'return _object;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.message.JsonConverterGenerator.generateRead@POLYN230699 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#125"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00125] For method generateTargetFromJson arguments Target  target|Versions  curVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#125"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00125] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'if (!%s.isBoolean()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00129] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'throw new RuntimeException(\'%s expected Boolean type, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00134] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '.asBoolean()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToByte(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToShort(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00147"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToUnsignedShort(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToUnsignedInt(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToInt(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToLong(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'if (!%s.isTextual()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'throw new RuntimeException(\'%s expected a JSON string ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'type, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00171"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'Uuid.fromString(%s.asText())' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'MessageUtil.jsonNodeToDouble(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s%s.isNull()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00187"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetFromJson@POLYN234217 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#198"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00198] For method generateVariableLengthTargetFromJson arguments Target  target|Versions  curVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00198] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'if (!%s.isTextual()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'throw new RuntimeException(\'%s expected a string ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'type, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00205] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00206"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00206] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s.asText()' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'ByteBuffer.wrap(MessageUtil.jsonNodeToBinary(%s, \'%s\'))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00217"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#217"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00217] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'MessageUtil.jsonNodeToBinary(%s, \'%s\')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'MemoryRecords.readableRecords(ByteBuffer.wrap(MessageUtil.jsonNodeToBinary(%s, \'%s\')))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#228"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00228] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'if (!%s.isArray()) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00230"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'throw new RuntimeException(\'%s expected a JSON ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00231] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'array, but got \' + _node.getNodeType());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00235"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s _collection = new %s(%s.size());%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00236] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '_collection' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'for (JsonNode _element : %s) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '_collection.add(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00244"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00247"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  '%s%s.read(%s, _version)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetFromJson@POLYN239925 the MagicNumber/String  'Unexpected type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00254] For method generateOverloadWrite arguments String  className"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00255"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN244413 the MagicNumber/String  'public static JsonNode write(%s _object, short _version) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN244413 the MagicNumber/String  'return write(_object, _version, true);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00260] In method org.apache.kafka.message.JsonConverterGenerator.generateOverloadWrite@POLYN244413 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00263] For method generateWrite arguments String  className|StructSpec  struct|Versions  parentVersions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00263] For method generateWrite list of called methods Object monObjet|org.apache.kafka.message.VersionConditional VersionConditional_forVersionsN246469"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00264"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#264"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00264] The argument struct is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00265"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#265"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00265] The argument parentVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00283"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00283] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00287] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'public static JsonNode write(%s _object, short _version, boolean _serializeRecords) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'throw new UnsupportedVersionException(\'Can't write ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#275"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00275] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'version \' + _version + \' of %s\');%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'ObjectNode _node = new ObjectNode(JsonNodeFactory.instance);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '_object.%s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '_node.set(\'%s\', %s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '_object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00294"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#294"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00294] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00302"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00312"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '_object.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00317"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  'return _node;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00319"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.message.JsonConverterGenerator.generateWrite@POLYN244821 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#322"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00322] For method generateTargetToJson arguments Target  target|Versions  versions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00322"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#322"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00322] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00327] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00332] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00337"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00337] The same method call target.field() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00325"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'BooleanNode.valueOf(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00331"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'new ShortNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00335"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00335] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00336"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'new IntNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00340] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00341"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'new LongNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00345"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'new TextNode(%s.toString())' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00348"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00348] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'new DoubleNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s %s= null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '!' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00360"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00360] In method org.apache.kafka.message.JsonConverterGenerator.generateTargetToJson@POLYN248240 the MagicNumber/String  'NullNode.instance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00369] For method generateVariableLengthTargetToJson arguments Target  target|Versions  versions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00369] For method generateVariableLengthTargetToJson list of called methods Object monObjet|java.lang.String String_formatN255065"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00369"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#369"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00369] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00372"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00372] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00373"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'new TextNode(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00379"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00379] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'new BinaryNode(MessageUtil.byteBufferToArray(%s))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00383"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#383"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00383] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#384"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00384] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'new BinaryNode(Arrays.copyOf(%s, %s.length))' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'if (_serializeRecords) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'new BinaryNode(new byte[]{})' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00397"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00397] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '} else {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00399] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '_node.set(\'%sSizeInBytes\', new IntNode(%s.sizeInBytes()));%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00403"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00403] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00409"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#409"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00409] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '_%sArray' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00411"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'ArrayNode %s = new ArrayNode(JsonNodeFactory.instance);%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'for (%s _element : %s) {%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00417"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s.add(%s)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00420"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '}%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%s;%n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  '%sJsonConverter.write(%s, _version, _serializeRecords)' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.message.JsonConverterGenerator.generateVariableLengthTargetToJson@POLYN252130 the MagicNumber/String  'unknown type ' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/generator/src/main/java/org/apache/kafka/message/JsonConverterGenerator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
